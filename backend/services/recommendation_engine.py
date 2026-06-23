from services.json_service import read_json


def normalize(skill):
    return skill.strip().lower()


def recommend_careers(user_skills):
    careers = read_json("careers.json", [])
    user_skill_names = {normalize(skill["name"] if isinstance(skill, dict) else skill) for skill in user_skills}
    recommendations = []

    for career in careers:
        required = career["required_skills"]
        matched = sum(1 for skill in required if normalize(skill) in user_skill_names)
        score = round((matched / len(required)) * 100) if required else 0
        recommendations.append({"name": career["name"], "score": score})

    return sorted(recommendations, key=lambda item: item["score"], reverse=True)
