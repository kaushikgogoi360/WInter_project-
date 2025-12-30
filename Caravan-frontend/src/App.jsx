import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/AppLayout";

import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <Routes>
      {/* All pages use the same layout */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
