from flask import Blueprint, jsonify

from services.json_service import read_json

admin_bp = Blueprint("admin", __name__)


@admin_bp.get("/users")
def users():
    all_users = read_json("users.json", [])
    safe_users = [{key: value for key, value in user.items() if key != "password"} for user in all_users]
    return jsonify({"users": safe_users})


@admin_bp.get("/reports")
def reports():
    return jsonify({"assessments": read_json("assessments.json", [])})
