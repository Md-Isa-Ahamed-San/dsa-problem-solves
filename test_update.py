#!/usr/bin/env python3
"""Test the update_cf_header module directly."""

import sys
from pathlib import Path

# Add scripts to path
sys.path.insert(0, str(Path(__file__).parent / "scripts"))

from update_cf_header import (
    _extract_metadata_from_cph_file,
    _extract_problem_info_from_url,
    _fetch_codeforces_metadata,
    _find_cph_metadata_file,
    update_header_from_cph_metadata,
)


def test_file(filename: str):
    """Test updating a specific file."""
    path = Path(filename).resolve()
    print(f"\n{'=' * 60}")
    print(f"Testing: {path.name}")
    print(f"{'=' * 60}")

    # Step 1: Find metadata file
    print("\n1. Finding .cph metadata file...")
    metadata_file = _find_cph_metadata_file(path)
    print(f"   Result: {metadata_file}")

    if not metadata_file:
        print("   ERROR: No metadata file found!")
        return

    # Step 2: Extract metadata
    print("\n2. Extracting metadata from .cph file...")
    metadata = _extract_metadata_from_cph_file(metadata_file)
    print(f"   Metadata keys: {list(metadata.keys()) if metadata else 'None'}")
    if metadata:
        print(f"   - name: {metadata.get('name')}")
        print(f"   - url: {metadata.get('url')}")
        print(f"   - rating: {metadata.get('rating')}")
        print(f"   - tags: {metadata.get('tags')}")
        print(f"   - contestId: {metadata.get('contestId')}")
        print(f"   - index: {metadata.get('index')}")

    # Step 3: Extract problem info from URL
    print("\n3. Extracting problem info from URL...")
    url = metadata.get("url") if metadata else None
    contest_id, index = _extract_problem_info_from_url(url)
    print(f"   - Contest ID: {contest_id}")
    print(f"   - Index: {index}")

    # Step 4: Fetch from Codeforces API
    if contest_id and index:
        print("\n4. Fetching from Codeforces API...")
        cf_data = _fetch_codeforces_metadata(contest_id, index)
        if cf_data:
            print(f"   - name: {cf_data.get('name')}")
            print(f"   - rating: {cf_data.get('rating')}")
            print(f"   - tags: {cf_data.get('tags')}")
        else:
            print("   ERROR: No data returned from API!")

    # Step 5: Try to update header
    print("\n5. Attempting to update header...")
    success = update_header_from_cph_metadata(path, metadata)
    print(f"   Result: {success}")

    if success:
        print("\n✓ Header updated successfully!")
        print("   New header:")
        lines = path.read_text().splitlines()[:7]
        for line in lines:
            print(f"     {line}")
    else:
        print("\n✗ Failed to update header")


if __name__ == "__main__":
    test_file("A_Circuit.py")
    test_file("C_Product_of_Three_Numbers.py")
