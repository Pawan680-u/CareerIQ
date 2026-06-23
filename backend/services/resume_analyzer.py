from services.json_service import read_json
from services.recommendation_engine import normalize, recommend_careers


def extract_resume_skills(resume_text):
    careers = read_json("careers.json", [])
    known_skills = sorted({skill for career in careers for skill in career["required_skills"]})
    text = resume_text.lower()
    return [skill for skill in known_skills if normalize(skill) in text]


def analyze_resume(resume_text):
    skills = extract_resume_skills(resume_text)
    suggested = recommend_careers(skills)
    top_career = suggested[0]["name"] if suggested else None
    careers = read_json("careers.json", [])
    required = next((career["required_skills"] for career in careers if career["name"] == top_career), [])
    missing = [skill for skill in required if skill not in skills]
    strengths = skills[:6]

    return {
        "skills": skills,
        "technologies": skills,
        "strengths": strengths,
        "suggested_careers": suggested[:3],
        "missing_skills": missing
    }
