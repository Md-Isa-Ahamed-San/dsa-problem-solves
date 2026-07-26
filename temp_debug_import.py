import sys
import traceback
from pathlib import Path

sys.path.insert(0, str(Path(".").resolve()))
import scripts.update_cf_header as mod

print(mod.__file__)
try:
    print("imported ok")
except Exception:
    traceback.print_exc()
