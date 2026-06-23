import { useEffect, useState } from "react";
import AssessmentTable from "../components/AssessmentTable";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import UserTable from "../components/UserTable";
import { api } from "../services/api";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    api.users().then((data) => setUsers(data.users)).catch(() => setUsers([]));
    api.reports().then((data) => setAssessments(data.assessments)).catch(() => setAssessments([]));
  }, []);

  const average = assessments.length ? Math.round(assessments.reduce((sum, item) => sum + item.readiness, 0) / assessments.length) : 0;

  return (
    <>
      <PageHeader title="Admin Dashboard" subtitle="View registered users, reports, and assessment activity." />
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <StatCard title="Total Users" value={users.length} />
        <StatCard title="Assessments" value={assessments.length} />
        <StatCard title="Average Readiness" value={`${average}%`} />
      </div>
      <div className="space-y-6">
        <section><h2 className="mb-3 font-bold text-slate-900">Users</h2><UserTable users={users} /></section>
        <section><h2 className="mb-3 font-bold text-slate-900">Assessments</h2><AssessmentTable assessments={assessments} /></section>
      </div>
    </>
  );
}
