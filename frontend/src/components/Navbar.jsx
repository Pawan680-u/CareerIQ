import { LogOut, Menu, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../services/auth";

export default function Navbar({ onMenu }) {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden" onClick={onMenu} title="Open menu">
            <Menu size={20} />
          </button>
          <Link to="/dashboard" className="text-lg font-bold text-brand-700">CAREERIQ</Link>
        </div>
        {user && (
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 text-sm text-slate-600 sm:flex">
              <User size={18} />
              <span>{user.name}</span>
            </div>
            <button className="btn-secondary px-3" onClick={handleLogout} title="Logout">
              <LogOut size={18} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
