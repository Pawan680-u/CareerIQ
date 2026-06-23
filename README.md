# CAREERIQ: Personalized Skill Gap Analyzer and Career Development Platform

CAREERIQ is a moderate-level full stack college major project that helps students analyze current skills, compare them with career requirements, receive career recommendations, generate learning roadmaps, analyze resume text, and track progress.

## Tech Stack

- Frontend: React.js, Vite, Tailwind CSS, React Router, Recharts
- Backend: Python Flask, Flask-CORS
- Database: Local JSON files
- AI Style Features: Rule-based skill gap analysis, resume skill extraction, career recommendation engine, roadmap generation

## Complete Project Structure

```text
careeriq/
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── logo.svg
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── CareerCard.jsx
│   │   │   ├── SkillBadge.jsx
│   │   │   ├── ChartCard.jsx
│   │   │   ├── RoadmapCard.jsx
│   │   │   ├── ReportSection.jsx
│   │   │   ├── UserTable.jsx
│   │   │   ├── AssessmentTable.jsx
│   │   │   ├── ResumeResultCard.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   ├── LoadingButton.jsx
│   │   │   └── PageHeader.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── SkillAssessment.jsx
│   │   │   ├── CareerRecommendations.jsx
│   │   │   ├── SkillGapReport.jsx
│   │   │   ├── ResumeAnalyzer.jsx
│   │   │   ├── LearningRoadmap.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   ├── data/
│   │   │   └── skills.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/
│   ├── routes/
│   │   ├── auth_routes.py
│   │   ├── career_routes.py
│   │   ├── analysis_routes.py
│   │   ├── resume_routes.py
│   │   ├── roadmap_routes.py
│   │   └── admin_routes.py
│   ├── services/
│   │   ├── json_service.py
│   │   ├── skill_analyzer.py
│   │   ├── recommendation_engine.py
│   │   ├── resume_analyzer.py
│   │   └── roadmap_generator.py
│   ├── database/
│   │   ├── users.json
│   │   ├── careers.json
│   │   └── assessments.json
│   ├── app.py
│   └── requirements.txt
└── README.md
```

## Installation Steps

### 1. Backend Setup

```bash
cd careeriq/backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Backend runs at:

```text
http://127.0.0.1:5000
```

### 2. Frontend Setup

Open a second terminal:

```bash
cd careeriq/frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

## Demo Login

```text
Admin:
Email: admin@careeriq.com
Password: admin123

Student:
Email: student@careeriq.com
Password: student123
```

## Backend API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/register` | Register user in JSON |
| POST | `/login` | Login user |
| GET | `/careers` | Fetch career data |
| POST | `/skill-analysis` | Analyze skill gap |
| POST | `/resume-analysis` | Extract skills from resume text |
| POST | `/generate-roadmap` | Generate roadmap |
| GET | `/users` | Admin user list |
| GET | `/reports` | Admin/user assessment reports |

## Project Features

- User registration, login, logout, and protected routes
- Dashboard with widgets and Recharts progress chart
- Skill assessment with proficiency levels
- Career recommendation engine for 7 careers
- Skill gap analyzer with missing, weak, and strong skills
- Beginner, intermediate, and advanced learning roadmap
- Resume text upload and skill extraction
- Profile page with local profile update
- Admin dashboard for users and assessments
- JSON-only storage with no external database

## Screenshots Description

1. Home Page: CAREERIQ landing screen with project summary and quick access buttons.
2. Login Page: Email/password form with validation message area.
3. Register Page: User registration form with education input.
4. Dashboard: Shows readiness score, career match score, recommendations, and progress chart.
5. Skill Assessment: Skill checklist with proficiency selectors and generated gap result.
6. Career Recommendations: Cards for all careers with required skills and match scores.
7. Skill Gap Report: Latest readiness percentage with strong, weak, and missing skill sections.
8. Resume Analyzer: Text file upload, resume textarea, extracted skills, suggested careers, and missing skills.
9. Learning Roadmap: Career selector with beginner, intermediate, and advanced roadmap cards.
10. Profile Page: Name, email, education, and skills management.
11. Admin Dashboard: User table, assessment table, and summary widgets.

## Project Architecture Diagram

```text
User
 |
 v
React Frontend
 |-- Pages
 |-- Components
 |-- API Service
 |
 v
Flask Backend
 |-- Auth Routes
 |-- Career Routes
 |-- Analysis Routes
 |-- Resume Routes
 |-- Roadmap Routes
 |-- Admin Routes
 |
 v
Service Layer
 |-- Skill Analyzer
 |-- Recommendation Engine
 |-- Resume Analyzer
 |-- Roadmap Generator
 |
 v
JSON Database
```

## Database Flow Diagram

```text
Frontend Form
 |
 v
Flask Route
 |
 v
Service Function
 |
 v
json_service.py
 |
 +--> users.json
 +--> careers.json
 +--> assessments.json
```

## API Flow Diagram

```text
React Page
 |
 v
services/api.js
 |
 v
HTTP Request
 |
 v
Flask Endpoint
 |
 v
Rule-Based Processing
 |
 v
JSON Response
 |
 v
React UI Update
```

## Viva Questions and Answers

1. What is CAREERIQ?
Answer: CAREERIQ is a personalized skill gap analyzer and career development platform that recommends careers, analyzes skills, generates learning paths, and tracks student progress.

2. Which technology is used for the frontend?
Answer: React.js with Vite, Tailwind CSS, React Router, and Recharts.

3. Which technology is used for the backend?
Answer: Python Flask with Flask-CORS.

4. Which database is used?
Answer: Local JSON files are used instead of MySQL, MongoDB, or Firebase.

5. How does authentication work?
Answer: Users register and login through Flask APIs. User records are stored in users.json with hashed passwords.

6. How does skill gap analysis work?
Answer: It compares selected user skills and proficiency levels with required skills for a target career.

7. What are strong skills?
Answer: Strong skills are required career skills where the user selected Advanced proficiency.

8. What are weak skills?
Answer: Weak skills are required skills where the user selected Beginner or Intermediate proficiency.

9. What are missing skills?
Answer: Missing skills are required career skills not selected by the user.

10. How is readiness percentage calculated?
Answer: Each required skill receives points based on proficiency, and the total is converted into a percentage.

11. How does career recommendation work?
Answer: The system compares user skills with each career's required skills and ranks careers by match percentage.

12. How does resume analysis work?
Answer: Resume text is scanned for known skills from the career database.

13. Why is this called rule-based AI?
Answer: It uses logical rules and skill matching instead of a trained machine learning model.

14. What is the role of Recharts?
Answer: Recharts displays dashboard progress and readiness data visually.

15. What is the admin panel used for?
Answer: It displays all registered users and generated assessment reports.

16. Can this project be completed in 4 days?
Answer: Yes, because it uses simple JSON storage, rule-based logic, and a modular but manageable code structure.

17. What are the limitations?
Answer: It does not use advanced NLP, real resume PDF parsing, or a production database.

18. How can the project be improved?
Answer: It can add JWT authentication, PDF resume parsing, real databases, machine learning recommendations, and course APIs.

## Future Enhancements

- JWT-based authentication
- Resume PDF and DOCX parsing
- MySQL/PostgreSQL database support
- Admin role permissions
- Course recommendation API integration
- Machine learning-based career prediction
- Downloadable PDF skill reports
- Email reminders for roadmap progress

# How we run this code 
## 1. First backend
- cd careeriq
- cd backend
- python -m venv venv
- Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
- .\venv\Scripts\Activate.ps1
- pip install -r requirements.txt
- python app.py

## Frontend Second Terminal 
- cd D:\D_Project\careeriq-project\careeriq\frontend
- npm install
- npm install pdfjs-dist
- npm run dev
