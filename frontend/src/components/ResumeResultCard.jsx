import SkillBadge from "./SkillBadge";

export default function ResumeResultCard({ result }) {
  if (!result) return null;
  return (
    <div className="card p-5">
      <h3 className="font-bold text-slate-900">Resume Analysis Result</h3>
      <div className="mt-4 grid gap-5 lg:grid-cols-3">
        <div><p className="mb-2 text-sm font-semibold text-slate-600">Extracted Skills</p><div className="flex flex-wrap gap-2">{result.skills.map((s) => <SkillBadge key={s} label={s} />)}</div></div>
        <div><p className="mb-2 text-sm font-semibold text-slate-600">Suggested Careers</p><div className="space-y-2">{result.suggested_careers.map((c) => <p key={c.name} className="rounded-lg bg-slate-50 p-2 text-sm">{c.name} - {c.score}%</p>)}</div></div>
        <div><p className="mb-2 text-sm font-semibold text-slate-600">Missing Skills</p><div className="flex flex-wrap gap-2">{result.missing_skills.map((s) => <SkillBadge key={s} label={s} tone="red" />)}</div></div>
      </div>
    </div>
  );
}
