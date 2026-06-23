import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import AdminDashboard from "./pages/AdminDashboard";
import CareerRecommendations from "./pages/CareerRecommendations";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LearningRoadmap from "./pages/LearningRoadmap";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import SkillAssessment from "./pages/SkillAssessment";
import SkillGapReport from "./pages/SkillGapReport";

function Shell({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="min-w-0 flex-1">
        <Navbar onMenu={() => setOpen(true)} />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const publicPage = ["/", "/login", "/register"].includes(location.pathname);
  const wrap = (page) => <ProtectedRoute><Shell>{page}</Shell></ProtectedRoute>;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={wrap(<Dashboard />)} />
      <Route path="/assessment" element={wrap(<SkillAssessment />)} />
      <Route path="/careers" element={wrap(<CareerRecommendations />)} />
      <Route path="/skill-gap" element={wrap(<SkillGapReport />)} />
      <Route path="/resume" element={wrap(<ResumeAnalyzer />)} />
      <Route path="/roadmap" element={wrap(<LearningRoadmap />)} />
      <Route path="/profile" element={wrap(<Profile />)} />
      <Route path="/admin" element={wrap(<AdminDashboard />)} />
      <Route path="*" element={publicPage ? <Home /> : wrap(<Dashboard />)} />
    </Routes>
  );
}
