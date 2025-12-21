import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

function App() {
  const location = useLocation();

  // Routes where navbar should NOT appear
  const hideNavbarRoutes = ["/SignUp", "/Login"];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
