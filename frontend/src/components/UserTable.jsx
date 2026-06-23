export default function UserTable({ users = [] }) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr><th className="p-3">Name</th><th className="p-3">Email</th><th className="p-3">Education</th><th className="p-3">Skills</th></tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email} className="border-t border-slate-100">
              <td className="p-3 font-medium">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.education || "Not added"}</td>
              <td className="p-3">{(user.skills || []).join(", ") || "No skills"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
