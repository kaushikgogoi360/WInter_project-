import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl bg-white/20
        border-b border-white/30
        shadow-lg
        font-[Poppins]
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Complaint Portal
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg text-black">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/complaint">Post Complaint</NavItem>
          <NavItem to="/login">Login</NavItem>
        </div>

        {/* Hamburger (opens sidebar) */}
        <button
          className="md:hidden text-3xl text-black"
          onMouseEnter={() => setOpen(true)}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Sliding Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-60
          bg-white/40 backdrop-blur-xl
          shadow-2xl pt-20 flex flex-col gap-6
          transition-transform duration-500
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        onMouseLeave={() => setOpen(false)}
      >
        <NavItem to="/" onClick={() => setOpen(false)}>
          Home
        </NavItem>
        <NavItem to="/complaint" onClick={() => setOpen(false)}>
          Post Complaint
        </NavItem>
        <NavItem to="/login" onClick={() => setOpen(false)}>
          Login
        </NavItem>
      </div>
    </nav>
  );
}

/* 🔥 Animated underline link component */
function NavItem({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        relative text-black text-lg tracking-wide
        transition duration-300
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-gradient-to-r
        after:from-blue-400 after:to-purple-400
        hover:after:w-full after:transition-all after:duration-300
      "
    >
      {children}
    </Link>
  );
}

export default Navbar;
