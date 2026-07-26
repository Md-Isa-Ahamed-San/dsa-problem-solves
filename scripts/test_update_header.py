import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from scripts.update_cf_header import (
    _extract_problem_info_from_url,
    update_header_from_cph_metadata,
)
from scripts.watch_cf_header import maybe_update_header


def test_extract_problem_info_from_url():
    assert _extract_problem_info_from_url(
        "https://codeforces.com/contest/681/problem/A"
    ) == (681, "A")
    assert _extract_problem_info_from_url(
        "https://codeforces.com/problemset/problem/4/A"
    ) == (4, "A")
    assert _extract_problem_info_from_url(
        "https://codeforces.com/problemset/problem/1294/C"
    ) == (1294, "C")


def test_updates_header_from_cph_metadata(tmp_path):
    source = tmp_path / "solution.py"
    source.write_text(
        "# --------------------------------\n"
        "#  Problem : A_A_Good_Contest\n"
        "#  Author  : Md Isa Ahamed San\n"
        "#  Date    : 2026-07-25\n"
        "# --------------------------------\n\n"
        "print('hi')\n",
        encoding="utf-8",
    )

    metadata = {
        "name": "A. A Good Contest",
        "group": "Codeforces - Codeforces Round 357 (Div. 2)",
        "url": "https://codeforces.com/contest/681/problem/A",
        "contestId": 681,
        "index": "A",
        "rating": 800,
        "tags": ["implementation", "math"],
    }

    update_header_from_cph_metadata(source, metadata)

    content = source.read_text(encoding="utf-8")
    assert "#  Problem : A. A Good Contest" in content
    assert "#  Rating  : 800" in content
    assert "#  Tags    : implementation, math" in content
    assert "#  Author  : Md Isa Ahamed San" in content
    assert "#  Date    : 2026-07-25" in content


def test_maybe_update_header_uses_cph_metadata(tmp_path):
    source = tmp_path / "solution.py"
    source.write_text(
        "# --------------------------------\n"
        "#  Problem : A_A_Good_Contest\n"
        "#  Rating  : auto from Codeforces\n"
        "#  Tags    : auto from Codeforces\n"
        "#  Author  : Md Isa Ahamed San\n"
        "#  Date    : 2026-07-25\n"
        "# --------------------------------\n",
        encoding="utf-8",
    )

    cph_dir = tmp_path / ".cph"
    cph_dir.mkdir()
    (cph_dir / "solution.py.prob").write_text(
        '{"name":"A. A Good Contest","url":"https://codeforces.com/contest/681/problem/A","contestId":681,"index":"A","rating":800,"tags":["implementation","math"]}',
        encoding="utf-8",
    )

    assert maybe_update_header(source)
    content = source.read_text(encoding="utf-8")
    assert "#  Rating  : 800" in content
    assert "#  Tags    : implementation, math" in content
