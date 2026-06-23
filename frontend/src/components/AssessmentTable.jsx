export default function AssessmentTable({ assessments = [] }) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr><th className="p-3">User</th><th className="p-3">Career</th><th className="p-3">Readiness</th><th className="p-3">Date</th></tr>
        </thead>
        <tbody>
          {assessments.map((item) => (
            <tr key={item.id} className="border-t border-slate-100">
              <td className="p-3 font-medium">{item.email}</td>
              <td className="p-3">{item.target_career}</td>
              <td className="p-3">{item.readiness}%</td>
              <td className="p-3">{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
