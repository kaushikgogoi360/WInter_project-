import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function SignUpPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [msg, setMsg] = useState("");

  // Update form fields
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await authService.register(form);
      setMsg(" Account created successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMsg(" " + err.message);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[380px]">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">
          Create Account
        </h2>

        {msg && (
          <p className="text-center mb-3 text-sm text-red-600 font-medium">
            {msg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="border p-2 rounded-md"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4 text-gray-600">Already registered?</p>

        <button
          onClick={() => navigate("/Login")}
          className="w-full mt-2 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
