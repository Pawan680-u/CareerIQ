from flask import Blueprint, jsonify, request

from services.skill_analyzer import analyze_skill_gap

analysis_bp = Blueprint("analysis", __name__)


@analysis_bp.post("/skill-analysis")
def skill_analysis():
    data = request.get_json() or {}
    try:
        result = analyze_skill_gap(data.get("email"), data.get("target_career"), data.get("skills", []))
        return jsonify(result)
    except ValueError as error:
        return jsonify({"message": str(error)}), 400
