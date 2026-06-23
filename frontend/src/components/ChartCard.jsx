export default function ChartCard({ title, children }) {
  return (
    <div className="card p-5">
      <h3 className="mb-4 font-bold text-slate-900">{title}</h3>
      <div className="h-72">{children}</div>
    </div>
  );
}
