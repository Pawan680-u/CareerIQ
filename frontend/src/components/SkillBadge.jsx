export default function SkillBadge({ label, tone = "blue" }) {
  const styles = {
    blue: "bg-brand-50 text-brand-700",
    green: "bg-emerald-50 text-emerald-700",
    red: "bg-rose-50 text-rose-700",
    slate: "bg-slate-100 text-slate-700"
  };
  return <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${styles[tone] || styles.blue}`}>{label}</span>;
}
