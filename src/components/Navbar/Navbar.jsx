import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto lg:pt-5">
      <div className="navbar bg-base-100 ">
        <div className="md:navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div
                  className="tooltip tooltip-bottom tooltip-primary"
                  data-tip="Shourav"
                >
                  <div className="avatar online mx-2">
                    <div className="w-12 rounded-full">
                      <img src="https://lh3.googleusercontent.com/ogw/AOLn63H1dshlzYjGCCtxbSfpRjKxEpN1fOTUp1AEdv39=s32-c-mo" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blog</NavLink>
              </li>
              
            </ul>
          </div>

          <a className="   font-bold text-xl md:text-2xl w-full">
            FoodChef India
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500 bg-transparent" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500 bg-transparent" : ""
                }
                to="/blogs"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex items-center">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>

          <div
            className="tooltip tooltip-bottom tooltip-primary"
            data-tip="Shourav"
          >
            <div className="avatar online mx-2">
              <div className="w-12 rounded-full">
                <img src="https://lh3.googleusercontent.com/ogw/AOLn63H1dshlzYjGCCtxbSfpRjKxEpN1fOTUp1AEdv39=s32-c-mo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
