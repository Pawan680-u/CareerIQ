from datetime import datetime
from uuid import uuid4

from services.json_service import read_json, write_json
from services.recommendation_engine import normalize, recommend_careers


LEVEL_SCORE = {"Beginner": 1, "Intermediate": 2, "Advanced": 3}


def analyze_skill_gap(email, target_career, skills):
    careers = read_json("careers.json", [])
    career = next((item for item in careers if item["name"] == target_career), None)
    if not career:
        raise ValueError("Career not found")

    skill_map = {normalize(item["name"]): item.get("level", "Beginner") for item in skills}
    required = career["required_skills"]
    strong_skills, weak_skills, missing_skills = [], [], []
    total_points = len(required) * 3
    earned_points = 0

    for skill in required:
      level = skill_map.get(normalize(skill))
      if not level:
          missing_skills.append(skill)
          continue
      points = LEVEL_SCORE.get(level, 1)
      earned_points += points
      if points >= 3:
          strong_skills.append(skill)
      else:
          weak_skills.append(skill)

    readiness = round((earned_points / total_points) * 100) if total_points else 0
    recommendations = recommend_careers(skills)
    result = {
        "id": str(uuid4()),
        "email": email,
        "target_career": target_career,
        "readiness": readiness,
        "strong_skills": strong_skills,
        "weak_skills": weak_skills,
        "missing_skills": missing_skills,
        "recommendations": recommendations,
        "best_match": recommendations[0] if recommendations else None,
        "created_at": datetime.now().strftime("%Y-%m-%d %H:%M")
    }

    assessments = read_json("assessments.json", [])
    assessments.insert(0, result)
    write_json("assessments.json", assessments)
    return result
