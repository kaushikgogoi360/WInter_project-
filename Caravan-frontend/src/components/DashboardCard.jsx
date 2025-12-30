export default function DashboardCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-4">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">{title}</h3>
      {children}
    </div>
  );
}
