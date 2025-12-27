import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function UserNavbar() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logoutUser();
    navigate("/login");
  };

  return (
    <div className="w-full h-14 bg-blue-600 text-white flex items-center justify-between px-6 shadow-md">
      {/* Welcome text */}
      <div className="text-lg font-semibold">
        😄 Welcome, {user?.name || "Legend"}
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-4 py-1.5 rounded-md font-medium hover:bg-gray-100 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default UserNavbar;
