from flask import Blueprint, jsonify

from services.json_service import read_json

career_bp = Blueprint("careers", __name__)


@career_bp.get("/careers")
def get_careers():
    return jsonify({"careers": read_json("careers.json", [])})
