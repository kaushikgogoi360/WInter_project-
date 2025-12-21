import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import UserDashboard from "./Pages/UserDashboard";

function App() {
  const location = useLocation();

  // Routes where navbar should NOT appear
  const hideNavbarRoutes = ["/signup", "/login", "/user"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
