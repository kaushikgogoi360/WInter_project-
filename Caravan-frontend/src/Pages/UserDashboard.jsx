import React from "react";

function UserDashboard() {
  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>

        <p className="text-gray-600">Welcome! From here you can:</p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
          <li>Post a new complaint</li>
          <li>Check the status of your complaints</li>
          <li>Manage your account</li>
        </ul>
      </div>
    </div>
  );
}

export default UserDashboard;
