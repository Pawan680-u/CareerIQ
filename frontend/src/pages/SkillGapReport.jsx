import { useEffect, useState } from "react";
import EmptyState from "../components/EmptyState";
import PageHeader from "../components/PageHeader";
import ProgressBar from "../components/ProgressBar";
import ReportSection from "../components/ReportSection";
import { api } from "../services/api";
import { getUser } from "../services/auth";

export default function SkillGapReport() {
  const [reports, setReports] = useState([]);
  const user = getUser();

  useEffect(() => {
    api.reports().then((data) => setReports(data.assessments.filter((item) => item.email === user.email)));
  }, [user.email]);

  const latest = reports[0];

  return (
    <>
      <PageHeader title="Skill Gap Report" subtitle="Review your latest current-vs-required career skill analysis." />
      {!latest ? <EmptyState title="No report generated" message="Complete the skill assessment to create your first gap report." /> : (
        <div className="space-y-5">
          <div className="card p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div><h2 className="text-lg font-bold">{latest.target_career}</h2><p className="text-sm text-slate-500">Generated on {latest.created_at}</p></div>
              <span className="rounded-lg bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700">{latest.readiness}% ready</span>
            </div>
            <ProgressBar value={latest.readiness} label="Career Readiness" />
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <ReportSection title="Strong Skills" skills={latest.strong_skills} tone="green" />
            <ReportSection title="Weak Skills" skills={latest.weak_skills} tone="slate" />
            <ReportSection title="Missing Skills" skills={latest.missing_skills} tone="red" />
          </div>
        </div>
      )}
    </>
  );
}
