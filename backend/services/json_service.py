import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DATABASE_DIR = BASE_DIR / "database"


def read_json(filename, default):
    path = DATABASE_DIR / filename
    if not path.exists():
        write_json(filename, default)
        return default
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def write_json(filename, data):
    DATABASE_DIR.mkdir(parents=True, exist_ok=True)
    path = DATABASE_DIR / filename
    with path.open("w", encoding="utf-8") as file:
        json.dump(data, file, indent=2)
