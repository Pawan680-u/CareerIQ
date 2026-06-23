import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import LoadingButton from "../components/LoadingButton";
import ReportSection from "../components/ReportSection";
import ProgressBar from "../components/ProgressBar";
import { skillOptions, levelOptions } from "../data/skills";
import { api } from "../services/api";
import { getUser } from "../services/auth";

export default function SkillAssessment() {
  const [careers, setCareers] = useState([]);
  const [targetCareer, setTargetCareer] = useState("Frontend Developer");
  const [selected, setSelected] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = getUser();

  useEffect(() => { api.careers().then((data) => setCareers(data.careers)); }, []);

  const toggle = (skill) => setSelected((prev) => prev[skill] ? Object.fromEntries(Object.entries(prev).filter(([key]) => key !== skill)) : { ...prev, [skill]: "Beginner" });

  async function analyze() {
    setLoading(true);
    const skills = Object.entries(selected).map(([name, level]) => ({ name, level }));
    try {
      setResult(await api.analyzeSkills({ email: user.email, target_career: targetCareer, skills }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader title="Skill Assessment" subtitle="Select skills you know and set your proficiency level." />
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="card p-5">
          <label className="text-sm font-semibold text-slate-700">Target Career</label>
          <select className="input mt-2" value={targetCareer} onChange={(e) => setTargetCareer(e.target.value)}>
            {careers.map((career) => <option key={career.name}>{career.name}</option>)}
          </select>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skillOptions.map((skill) => (
              <div key={skill} className="rounded-lg border border-slate-200 p-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <input type="checkbox" checked={Boolean(selected[skill])} onChange={() => toggle(skill)} /> {skill}
                </label>
                {selected[skill] && (
                  <select className="input mt-3" value={selected[skill]} onChange={(e) => setSelected({ ...selected, [skill]: e.target.value })}>
                    {levelOptions.map((level) => <option key={level}>{level}</option>)}
                  </select>
                )}
              </div>
            ))}
          </div>
          <LoadingButton loading={loading} className="mt-5" onClick={analyze}>Analyze Skill Gap</LoadingButton>
        </section>
        <section className="space-y-4">
          {result ? (
            <>
              <div className="card p-5"><ProgressBar value={result.readiness} label="Readiness Percentage" /></div>
              <ReportSection title="Strong Skills" skills={result.strong_skills} tone="green" />
              <ReportSection title="Weak Skills" skills={result.weak_skills} tone="slate" />
              <ReportSection title="Missing Skills" skills={result.missing_skills} tone="red" />
            </>
          ) : <div className="card p-5 text-sm text-slate-500">Your assessment report will appear here.</div>}
        </section>
      </div>
    </>
  );
}
