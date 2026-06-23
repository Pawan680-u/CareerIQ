from flask import Blueprint, jsonify, request

from services.roadmap_generator import generate_roadmap

roadmap_bp = Blueprint("roadmap", __name__)


@roadmap_bp.post("/generate-roadmap")
def roadmap():
    data = request.get_json() or {}
    try:
        return jsonify(generate_roadmap(data.get("career")))
    except ValueError as error:
        return jsonify({"message": str(error)}), 400
