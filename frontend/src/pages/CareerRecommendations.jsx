import { useEffect, useState } from "react";
import CareerCard from "../components/CareerCard";
import PageHeader from "../components/PageHeader";
import { api } from "../services/api";
import { getUser } from "../services/auth";

export default function CareerRecommendations() {
  const [careers, setCareers] = useState([]);
  const [reports, setReports] = useState([]);
  const user = getUser();

  useEffect(() => {
    api.careers().then((data) => setCareers(data.careers));
    api.reports().then((data) => setReports(data.assessments.filter((item) => item.email === user.email)));
  }, [user.email]);

  const latest = reports[0];
  const scores = Object.fromEntries((latest?.recommendations || []).map((item) => [item.name, item.score]));

  return (
    <>
      <PageHeader title="Career Recommendations" subtitle="Explore suitable roles based on your skill profile." />
      <div className="grid gap-5 lg:grid-cols-2">
        {careers.map((career) => <CareerCard key={career.name} career={career} score={scores[career.name]} />)}
      </div>
    </>
  );
}
