import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="
        h-screen flex flex-col items-center justify-center
        bg-gray-100 font-[Poppins]
      "
    >
      <h1 className="text-3xl font-semibold mb-10">
        Welcome to Complaint Portal
      </h1>

      <button
        onClick={() => navigate("/complaint")}
        className="
          text-blue-700 font-semibold border border-blue-500 rounded 
          py-3 px-6 bg-transparent

          hover:bg-blue-500 hover:text-white hover:border-transparent
          transition-all duration-300

          hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.6)]
          active:scale-95
        "
      >
        POST A COMPLAINT
      </button>
    </div>
  );
}

export default LandingPage;
