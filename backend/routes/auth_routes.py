import hashlib

from flask import Blueprint, jsonify, request

from services.json_service import read_json, write_json

auth_bp = Blueprint("auth", __name__)


def hash_password(password):
    return hashlib.sha256(password.encode("utf-8")).hexdigest()


@auth_bp.post("/register")
def register():
    data = request.get_json() or {}
    required = ["name", "email", "password"]
    if not all(data.get(field) for field in required):
        return jsonify({"message": "Name, email, and password are required"}), 400

    users = read_json("users.json", [])
    if any(user["email"].lower() == data["email"].lower() for user in users):
        return jsonify({"message": "Email already registered"}), 409

    user = {
        "name": data["name"],
        "email": data["email"].lower(),
        "password": hash_password(data["password"]),
        "education": data.get("education", ""),
        "skills": data.get("skills", [])
    }
    users.append(user)
    write_json("users.json", users)

    safe_user = {key: value for key, value in user.items() if key != "password"}
    return jsonify({"message": "Registration successful", "user": safe_user}), 201


@auth_bp.post("/login")
def login():
    data = request.get_json() or {}
    users = read_json("users.json", [])
    user = next((item for item in users if item["email"].lower() == data.get("email", "").lower()), None)
    if not user or user["password"] != hash_password(data.get("password", "")):
        return jsonify({"message": "Invalid email or password"}), 401

    safe_user = {key: value for key, value in user.items() if key != "password"}
    return jsonify({"message": "Login successful", "user": safe_user})
