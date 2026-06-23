import ProgressBar from "./ProgressBar";
import SkillBadge from "./SkillBadge";

export default function CareerCard({ career, score }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-slate-900">{career.title || career.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{career.description || "Recommended based on your current skills."}</p>
        </div>
        {score !== undefined && <span className="rounded-lg bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700">{score}%</span>}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {(career.required_skills || career.skills || []).map((skill) => <SkillBadge key={skill} label={skill} />)}
      </div>
      {score !== undefined && <div className="mt-4"><ProgressBar value={score} label="Match score" /></div>}
    </div>
  );
}
