import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "../components/LoadingButton";
import { api } from "../services/api";
import { saveUser } from "../services/auth";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", education: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await api.register(form);
      saveUser(data.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-4">
      <form onSubmit={handleSubmit} className="card w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
        <p className="mt-1 text-sm text-slate-500">Build your personalized career profile.</p>
        {error && <p className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}
        <div className="mt-5 space-y-4">
          <input className="input" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input className="input" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <input className="input" type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <input className="input" placeholder="Education" value={form.education} onChange={(e) => setForm({ ...form, education: e.target.value })} />
        </div>
        <LoadingButton loading={loading} className="mt-5 w-full">Register</LoadingButton>
        <p className="mt-4 text-center text-sm text-slate-500">Already registered? <Link className="font-semibold text-brand-700" to="/login">Login</Link></p>
      </form>
    </main>
  );
}
