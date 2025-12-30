import DashboardCard from "../components/DashboardCard";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-1 space-y-4">
          {/* Stats Card */}
          <DashboardCard title="System Stats">
            <div className="space-y-2 text-sm">
              <p>
                👥 Total Users: <b>245</b>
              </p>
              <p>
                📄 Total Complaints: <b>1,235</b>
              </p>
              <p>
                ✅ Resolved: <b>824</b>
              </p>
              <p>
                ⏳ Pending: <b>310</b>
              </p>
            </div>
          </DashboardCard>

          {/* Recently Completed Tasks */}
          <DashboardCard title="Recently Completed">
            <ul className="text-sm space-y-2">
              <li>✔ Road damage resolved — Delhi</li>
              <li>✔ Water leakage fixed — Assam</li>
              <li>✔ Garbage cleared — Mumbai</li>
              <li>✔ Streetlight repaired — Jaipur</li>
            </ul>
          </DashboardCard>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-4">
          {/* Pending Complaints */}
          <DashboardCard title="Pending Complaints">
            <ul className="text-sm space-y-2">
              <li>🕒 Road damage — Kolkata</li>
              <li>🕒 Sewage issue — Patna</li>
              <li>🕒 Water supply — Surat</li>
            </ul>
          </DashboardCard>

          {/* Undergoing Complaints */}
          <DashboardCard title="Undergoing Complaints">
            <ul className="text-sm space-y-2">
              <li>🔧 Drain repair — Chennai</li>
              <li>🔧 Streetlight maintenance — Pune</li>
              <li>🔧 Pothole filling — Bhopal</li>
            </ul>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
