import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  // 🔥 live values (no state needed)
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    navigate("/", { replace: true });
  };

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/rooms">Rooms</Link></li>
      <li><Link to="/facility">Facilities</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </>
  );

  return (
    <div className="navbar bg-white fixed top-0 left-0 w-full shadow-md z-50">

      {/* LEFT SIDE */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost">
          <img src={logo} alt="logo" className="h-12" />
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end flex items-center gap-3 md:px-6">

        {/* NAV LINKS */}
        <ul className="menu menu-horizontal hidden md:flex font-semibold gap-2">
          {navItems}
        </ul>

        {/* MOBILE MENU */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow font-bold">
            {navItems}
          </ul>
        </div>

        {/* DASHBOARD BUTTON (ROLE BASED) */}
        {isLoggedIn && (
          <button
            onClick={() => {
              if (role === "admin") {
                navigate("/admin", { replace: true });
              } else {
                navigate("/student", { replace: true });
              }
            }}
            className="btn bg-blue-500 hover:bg-blue-600 text-white rounded-3xl"
          >
            Dashboard
          </button>
        )}

        {/* LOGIN / LOGOUT */}
        {!isLoggedIn ? (
          <button
            onClick={() => navigate("/login")}
            className="btn bg-green-500 hover:bg-green-600 text-white rounded-3xl"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="btn bg-red-500 hover:bg-red-600 text-white rounded-3xl"
          >
            Logout
          </button>
        )}

      </div>
    </div>
  );
};

export default Navbar;