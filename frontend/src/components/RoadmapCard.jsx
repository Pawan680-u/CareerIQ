export default function RoadmapCard({ title, items = [] }) {
  return (
    <div className="card p-5">
      <h3 className="font-bold text-slate-900">{title}</h3>
      <ol className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm text-slate-700">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">{index + 1}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
