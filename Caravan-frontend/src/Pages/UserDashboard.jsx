import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function UserDashboard() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const stats = {
    total: 12,
    pending: 4,
    resolved: 8,
  };

  const Card = ({ title, value, color, btnText, onClick }) => (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
      <div>
        <p className="text-gray-500">{title}</p>
        <h2 className={`text-3xl font-bold mt-2 ${color}`}>{value}</h2>
      </div>
      <button
        onClick={onClick}
        className="mt-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {btnText}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">
            Welcome, {user?.name || "User"} 👋
          </h1>
          <p className="text-gray-500">Here’s your complaint overview</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card
            title="Total Complaints"
            value={stats.total}
            color="text-blue-600"
            btnText="View All"
            onClick={() => navigate("/complaints")}
          />

          <Card
            title="Pending"
            value={stats.pending}
            color="text-yellow-500"
            btnText="Check"
            onClick={() => navigate("/complaints?status=pending")}
          />

          <Card
            title="Resolved"
            value={stats.resolved}
            color="text-green-600"
            btnText="View"
            onClick={() => navigate("/complaints?status=resolved")}
          />

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <p className="text-lg font-semibold">New Complaint</p>
              <p className="text-sm mt-1 opacity-80">Report a new issue</p>
            </div>

            <button
              onClick={() => navigate("/complaint/new")}
              className="mt-4 py-2 bg-white text-blue-700 rounded font-semibold hover:bg-gray-100"
            >
              + Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
