import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // public navbar
import UserNavbar from "./UserNavbar"; // logged‑in navbar
import authService from "../services/authService";

function AppLayout() {
  const user = authService.getCurrentUser();

  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}
      <Outlet />
    </>
  );
}

export default AppLayout;
