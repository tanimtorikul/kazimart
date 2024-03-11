import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Hide the logout button after successful logout
        setShowLogout(false);
      })
      .catch((error) => {});
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
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
          to="/contact"
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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="text-[#395CA7] font-bold text-2xl">
          Kazimart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 text-lg">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-6 text-[22px] text-[#FF9923]">
          <FaRegHeart />
          <FiShoppingCart />
          {user ? (
            <div
              className="relative inline-block text-left"
              onClick={toggleLogout}
            >
              <div>
                <img
                  src={user.photoURL}
                  alt="User"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
              </div>
              {showLogout && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a onClick={handleLogOut}>Logout</a>
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
