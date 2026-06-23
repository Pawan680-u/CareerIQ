import SkillBadge from "./SkillBadge";

export default function ReportSection({ title, skills = [], tone }) {
  return (
    <section className="card p-5">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.length ? skills.map((skill) => <SkillBadge key={skill} label={skill} tone={tone} />) : <p className="text-sm text-slate-500">No skills found.</p>}
      </div>
    </section>
  );
}
