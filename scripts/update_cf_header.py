import json
import re
import sys
from pathlib import Path
from typing import Any

HEADER_START = "# --------------------------------"
HEADER_END = "# --------------------------------"


def _normalize_problem_name(name: str | None) -> str:
    if not name:
        return ""
    return name.strip()


def _normalize_contest_name(group: str | None) -> str:
    if not group:
        return ""
    if group.startswith("Codeforces - "):
        return group[len("Codeforces - ") :]
    return group


def _extract_metadata_from_cph_file(cph_file: Path) -> dict[str, Any] | None:
    if not cph_file.exists():
        return None

    try:
        data = json.loads(cph_file.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return None

    if not isinstance(data, dict):
        return None

    name = data.get("name")
    url = data.get("url")
    group = data.get("group")

    metadata: dict[str, Any] = {}
    if name:
        metadata["name"] = name
    if url:
        metadata["url"] = url
    if group:
        metadata["group"] = group

    if "contestId" in data and "index" in data:
        metadata["contestId"] = data["contestId"]
        metadata["index"] = data["index"]

    if "rating" in data:
        metadata["rating"] = data["rating"]
    if "tags" in data:
        metadata["tags"] = data["tags"]

    return metadata or None


def _find_cph_metadata_file(path: Path) -> Path | None:
    cph_dir = path.parent / ".cph"
    if not cph_dir.exists():
        return None

    candidates = sorted(cph_dir.glob("*.prob"))
    target_name = path.name
    target_stem = path.stem

    for candidate in candidates:
        name = candidate.name
        if (
            name.startswith(f".{target_name}_")
            or name.startswith(f".{target_name}.")
            or name.startswith(f".{target_stem}_")
            or name.startswith(f".{target_stem}.")
        ):
            return candidate

    return None


def _extract_problem_info_from_url(url: str | None) -> tuple[int | None, str | None]:
    if not url:
        return None, None

    import re

    match = re.search(
        r"codeforces\.com/(?:contest|problemset/problem)/(?P<contest>\d+)(?:/(?:(?:problem/)?(?P<index>[A-Za-z0-9]+)))?",
        url,
    )
    if not match:
        return None, None

    contest_id = int(match.group("contest"))
    index = match.group("index")
    return contest_id, index


def _fetch_codeforces_metadata(
    contest_id: int | None, index: str | None
) -> dict[str, Any] | None:
    if not contest_id or not index:
        return None

    import urllib.request

    url = "https://codeforces.com/api/problemset.problems"
    try:
        with urllib.request.urlopen(url, timeout=10) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except Exception:
        return None

    if payload.get("status") != "OK":
        return None

    problems = payload.get("result", {}).get("problems", [])
    for problem in problems:
        if problem.get("contestId") == contest_id and str(
            problem.get("index", "")
        ) == str(index):
            return {
                "name": problem.get("name"),
                "rating": problem.get("rating"),
                "tags": problem.get("tags", []),
                "contestId": problem.get("contestId"),
                "index": problem.get("index"),
            }

    return None


def _build_header_lines(
    metadata: dict[str, Any], existing_header: list[str] | None = None
) -> list[str]:
    problem_name = _normalize_problem_name(metadata.get("name"))
    rating = metadata.get("rating")
    tags = metadata.get("tags") or []

    preserved_lines = []
    if existing_header:
        preserved_lines = [
            line
            for line in existing_header
            if line.startswith("#  Author") or line.startswith("#  Date")
        ]

    lines = [
        "# --------------------------------",
        f"#  Problem : {problem_name or 'Unknown'}",
    ]

    if rating is not None:
        lines.append(f"#  Rating  : {rating}")
    if tags:
        lines.append(f"#  Tags    : {', '.join(map(str, tags))}")

    lines.extend(preserved_lines)
    lines.append("# --------------------------------")
    return lines


def update_header_from_cph_metadata(
    file_path: Path | str, metadata: dict[str, Any] | None = None
) -> bool:
    path = Path(file_path)
    if not path.exists():
        return False

    if metadata is None:
        candidate = _find_cph_metadata_file(path)
        if candidate is None:
            return False

        metadata = _extract_metadata_from_cph_file(candidate)
        if metadata is None:
            return False

    if (
        metadata.get("name") is None
        and metadata.get("url") is None
        and metadata.get("group") is None
    ):
        return False

    if metadata.get("rating") is None or metadata.get("tags") is None:
        metadata = {**metadata}
        contest_id = metadata.get("contestId")
        index = metadata.get("index")
        if not contest_id and not index:
            contest_id, index = _extract_problem_info_from_url(metadata.get("url"))
        cf_metadata = _fetch_codeforces_metadata(contest_id, index)
        if cf_metadata:
            metadata.update(cf_metadata)

    text = path.read_text(encoding="utf-8")

    if "#  Problem :" not in text:
        return False

    header_match = re.search(
        r"^# --------------------------------\n(?:.*\n)*?^# --------------------------------\n",
        text,
        re.MULTILINE,
    )
    if header_match:
        existing_header_lines = [
            line.rstrip()
            for line in header_match.group(0).splitlines()
            if line.startswith("#  Author") or line.startswith("#  Date")
        ]
        new_header = (
            "\n".join(_build_header_lines(metadata, existing_header_lines)) + "\n"
        )
        text = text[: header_match.start()] + new_header + text[header_match.end() :]
    else:
        return False

    path.write_text(text, encoding="utf-8")
    return True


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: python scripts/update_cf_header.py <file.py>")
        return

    target = Path(sys.argv[1]).resolve()
    if not target.exists():
        print(f"File not found: {target}")
        return

    metadata = None
    cph_path = _find_cph_metadata_file(target)

    if cph_path:
        metadata = _extract_metadata_from_cph_file(cph_path)

    updated = update_header_from_cph_metadata(target, metadata)
    if updated:
        print(f"Updated header for {target}")
    else:
        print(f"No header updates applied for {target}")


if __name__ == "__main__":
    main()
