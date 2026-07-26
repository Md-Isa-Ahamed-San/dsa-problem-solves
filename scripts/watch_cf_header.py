from __future__ import annotations

import json
import os
import sys
import time
from pathlib import Path

from scripts.update_cf_header import (
    _find_cph_metadata_file,
    update_header_from_cph_metadata,
)


def maybe_update_header(path: str | os.PathLike[str]) -> bool:
    source = Path(path)
    if not source.exists():
        return False

    metadata_file = _find_cph_metadata_file(source)
    if metadata_file is None:
        return False

    try:
        raw = metadata_file.read_text(encoding="utf-8")
        metadata = json.loads(raw)
    except (OSError, json.JSONDecodeError):
        return False

    update_header_from_cph_metadata(source, metadata)
    return True


def watch_for_changes(root: str | os.PathLike[str], interval: float = 0.5) -> None:
    base_dir = Path(root).resolve()
    if not base_dir.exists():
        raise FileNotFoundError(base_dir)

    seen: dict[Path, int] = {}
    print(f"Watching for Codeforces header updates in {base_dir}...")

    while True:
        for path in sorted(base_dir.rglob("*.py")):
            if not path.is_file():
                continue
            try:
                current_mtime = path.stat().st_mtime_ns
            except OSError:
                continue
            if seen.get(path) != current_mtime:
                maybe_update_header(path)
                seen[path] = current_mtime

        for metadata_file in sorted(base_dir.rglob("*.prob")):
            if not metadata_file.is_file():
                continue
            try:
                current_mtime = metadata_file.stat().st_mtime_ns
            except OSError:
                continue
            if seen.get(metadata_file) != current_mtime:
                for py_file in sorted(base_dir.rglob("*.py")):
                    if py_file.is_file():
                        maybe_update_header(py_file)
                seen[metadata_file] = current_mtime
                break

        time.sleep(interval)


if __name__ == "__main__":
    target = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd()
    watch_for_changes(target)
