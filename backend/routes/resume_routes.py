from flask import Blueprint, jsonify, request

from services.resume_analyzer import analyze_resume

resume_bp = Blueprint("resume", __name__)


@resume_bp.post("/resume-analysis")
def resume_analysis():
    data = request.get_json() or {}
    resume_text = data.get("resume_text", "")
    if not resume_text.strip():
        return jsonify({"message": "Resume text is required"}), 400
    return jsonify(analyze_resume(resume_text))
