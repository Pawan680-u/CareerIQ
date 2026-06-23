import { BarChart3, BookOpen, Briefcase, FileText, Gauge, Home, LayoutDashboard, Shield, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/assessment", label: "Skill Assessment", icon: Gauge },
  { to: "/careers", label: "Careers", icon: Briefcase },
  { to: "/skill-gap", label: "Skill Gap", icon: BarChart3 },
  { to: "/resume", label: "Resume Analyzer", icon: FileText },
  { to: "/roadmap", label: "Roadmap", icon: BookOpen },
  { to: "/profile", label: "Profile", icon: UserRound },
  { to: "/admin", label: "Admin", icon: Shield }
];

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`${open ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-30 w-72 border-r border-slate-200 bg-white p-4 transition lg:sticky lg:top-0 lg:h-screen lg:translate-x-0`}>
      <NavLink to="/" className="mb-6 flex items-center gap-3" onClick={onClose}>
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-600 text-white"><Home size={20} /></div>
        <div>
          <p className="font-bold text-slate-900">CAREERIQ</p>
          <p className="text-xs text-slate-500">Career Development</p>
        </div>
      </NavLink>
      <nav className="space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${isActive ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <Icon size={18} /> {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
