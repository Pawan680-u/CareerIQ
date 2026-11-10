from flask import Flask
from flask_cors import CORS

from routes.admin_routes import admin_bp
from routes.analysis_routes import analysis_bp
from routes.auth_routes import auth_bp
from routes.career_routes import career_bp
from routes.resume_routes import resume_bp
from routes.roadmap_routes import roadmap_bp


def create_app():
    app = Flask(__name__)
    CORS(app)

    app.register_blueprint(auth_bp)
    app.register_blueprint(career_bp)
    app.register_blueprint(analysis_bp)
    app.register_blueprint(resume_bp)
    app.register_blueprint(roadmap_bp)
    app.register_blueprint(admin_bp)

    @app.get("/")
    def health():
        return {"message": "CAREERIQ API is running"}

    return app


# Required for Vercel deployment
app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
