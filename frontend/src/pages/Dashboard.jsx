import { Award, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartCard from "../components/ChartCard";
import EmptyState from "../components/EmptyState";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { api } from "../services/api";
import { getUser } from "../services/auth";

export default function Dashboard() {
  const [reports, setReports] = useState([]);
  const user = getUser();

  useEffect(() => {
    api.reports().then((data) => setReports(data.assessments.filter((item) => item.email === user.email))).catch(() => setReports([]));
  }, [user.email]);

  const latest = reports[0];
  const chartData = reports.slice(0, 5).map((r) => ({ career: r.target_career.replace(" Developer", ""), readiness: r.readiness })).reverse();

  return (
    <>
      <PageHeader title={`Welcome, ${user.name}`} subtitle="Track your career readiness and learning progress." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Skill Completion" value={`${latest?.readiness || 0}%`} helper="Based on latest assessment" icon={CheckCircle2} />
        <StatCard title="Career Match" value={`${latest?.best_match?.score || 0}%`} helper={latest?.best_match?.name || "Run assessment"} icon={Award} />
        <StatCard title="Recommended Careers" value={latest?.recommendations?.length || 0} helper="Personalized options" icon={Briefcase} />
        <StatCard title="Assessments" value={reports.length} helper="Reports generated" icon={TrendingUp} />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        {chartData.length ? (
          <ChartCard title="Recent Progress">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="career" /><YAxis /><Tooltip /><Bar dataKey="readiness" fill="#2563eb" radius={[8, 8, 0, 0]} /></BarChart>
            </ResponsiveContainer>
          </ChartCard>
        ) : <EmptyState title="No assessment yet" message="Complete your first skill assessment to see dashboard charts." />}
        <div className="card p-5">
          <h3 className="font-bold text-slate-900">Recommended Careers</h3>
          <div className="mt-4 space-y-3">
            {(latest?.recommendations || []).slice(0, 5).map((career) => (
              <div key={career.name} className="flex items-center justify-between rounded-lg bg-slate-50 p-3 text-sm">
                <span className="font-medium">{career.name}</span><span className="font-bold text-brand-700">{career.score}%</span>
              </div>
            ))}
            {!latest && <p className="text-sm text-slate-500">Recommendations will appear after analysis.</p>}
          </div>
        </div>
      </div>
    </>
  );
}
