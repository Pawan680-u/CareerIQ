export default function StatCard({ title, value, helper, icon: Icon }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
          {helper && <p className="mt-1 text-sm text-slate-500">{helper}</p>}
        </div>
        {Icon && <div className="rounded-lg bg-brand-50 p-3 text-brand-700"><Icon size={22} /></div>}
      </div>
    </div>
  );
}
