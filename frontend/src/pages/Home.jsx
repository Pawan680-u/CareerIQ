import { ArrowRight, BarChart3, Brain, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-lg bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">Personalized skill gap analyzer</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 lg:text-6xl">CAREERIQ</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Analyze your current skills, compare them with career requirements, generate learning roadmaps, and track your development with a simple AI-inspired rule engine.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn-primary" to="/register">Get Started <ArrowRight size={18} /></Link>
            <Link className="btn-secondary" to="/login">Login</Link>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            [Brain, "Career Recommendations", "Find the best role based on your current skills."],
            [BarChart3, "Skill Gap Reports", "See strong, weak, and missing skills clearly."],
            [GraduationCap, "Learning Roadmaps", "Follow beginner, intermediate, and advanced paths."]
          ].map(([Icon, title, text]) => (
            <div key={title} className="card p-6">
              <Icon className="text-brand-700" size={28} />
              <h2 className="mt-4 text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
