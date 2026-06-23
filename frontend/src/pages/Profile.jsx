import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SkillBadge from "../components/SkillBadge";
import { getUser, saveUser } from "../services/auth";

export default function Profile() {
  const current = getUser();
  const [profile, setProfile] = useState({ ...current, skillsText: (current.skills || []).join(", ") });
  const [saved, setSaved] = useState(false);

  function saveProfile(event) {
    event.preventDefault();
    const updated = { ...profile, skills: profile.skillsText.split(",").map((s) => s.trim()).filter(Boolean) };
    delete updated.skillsText;
    saveUser(updated);
    setSaved(true);
  }

  return (
    <>
      <PageHeader title="Profile" subtitle="Manage your basic academic and skill information." />
      <form onSubmit={saveProfile} className="card max-w-3xl p-5">
        {saved && <p className="mb-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">Profile saved locally.</p>}
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="input" placeholder="Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
          <input className="input" placeholder="Email" value={profile.email} disabled />
          <input className="input sm:col-span-2" placeholder="Education" value={profile.education || ""} onChange={(e) => setProfile({ ...profile, education: e.target.value })} />
          <textarea className="input min-h-28 sm:col-span-2" placeholder="Skills comma separated" value={profile.skillsText} onChange={(e) => setProfile({ ...profile, skillsText: e.target.value })} />
        </div>
        <button className="btn-primary mt-5">Save Profile</button>
      </form>
      <div className="mt-5 max-w-3xl card p-5">
        <h3 className="font-bold text-slate-900">Current Skills</h3>
        <div className="mt-3 flex flex-wrap gap-2">{profile.skillsText.split(",").filter(Boolean).map((s) => <SkillBadge key={s} label={s.trim()} />)}</div>
      </div>
    </>
  );
}
