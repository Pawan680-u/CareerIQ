import { useEffect, useState } from "react";
import LoadingButton from "../components/LoadingButton";
import PageHeader from "../components/PageHeader";
import RoadmapCard from "../components/RoadmapCard";
import { api } from "../services/api";

export default function LearningRoadmap() {
  const [careers, setCareers] = useState([]);
  const [career, setCareer] = useState("Full Stack Developer");
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => { api.careers().then((data) => setCareers(data.careers)); }, []);

  async function generate() {
    setLoading(true);
    try {
      setRoadmap(await api.generateRoadmap({ career }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader title="Learning Roadmap" subtitle="Generate a staged learning plan for your selected career." />
      <section className="card mb-5 flex flex-col gap-3 p-5 sm:flex-row">
        <select className="input" value={career} onChange={(e) => setCareer(e.target.value)}>
          {careers.map((item) => <option key={item.name}>{item.name}</option>)}
        </select>
        <LoadingButton loading={loading} onClick={generate}>Generate Roadmap</LoadingButton>
      </section>
      {roadmap && (
        <div className="grid gap-5 lg:grid-cols-3">
          <RoadmapCard title="Beginner Roadmap" items={roadmap.beginner} />
          <RoadmapCard title="Intermediate Roadmap" items={roadmap.intermediate} />
          <RoadmapCard title="Advanced Roadmap" items={roadmap.advanced} />
        </div>
      )}
    </>
  );
}
