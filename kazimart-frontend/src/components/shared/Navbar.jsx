import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [showLogout, setShowLogout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setShowLogout(false);
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navlinks = (
    <ul className="flex items-center space-x-4">
      <li>
        <NavLink
          exact
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              borderBottom: isActive ? "2px solid green" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "#103178",
            };
          }}
        >
          About Us
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="btn btn-ghost" 
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {menuOpen && (
            <ul
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              onMouseLeave={() => setMenuOpen(false)} // Close on mouse leave
            >
              {navlinks}
            </ul>
          )}
        </div>
        <Link to="/" className="text-[#395CA7] font-bold text-2xl">
          Kazimart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 text-lg">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-6 text-[22px] text-[#FF9923]">
          <FaRegHeart />
          <FiShoppingCart />
          {user ? (
            <div className="relative inline-block text-left" onClick={toggleLogout}>
              <img
                src={user.photoURL}
                alt="User"
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              {showLogout && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a onClick={handleLogOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="text-[22px] text-[#FF9923]">
              <FaRegUser />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
