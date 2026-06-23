from services.json_service import read_json


def generate_roadmap(career_name):
    careers = read_json("careers.json", [])
    career = next((item for item in careers if item["name"] == career_name), None)
    if not career:
        raise ValueError("Career not found")

    skills = career["required_skills"]
    return {
        "career": career_name,
        "beginner": [f"Learn fundamentals of {skill}" for skill in skills[:3]],
        "intermediate": [f"Build mini projects using {skill}" for skill in skills[1:4]],
        "advanced": [
            f"Create a portfolio project for {career_name}",
            "Practice interview questions and case studies",
            "Deploy work and document learning outcomes"
        ]
    }
