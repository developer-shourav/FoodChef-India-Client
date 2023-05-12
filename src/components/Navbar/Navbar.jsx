import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import {FiLogIn} from "react-icons/fi";
const Navbar = () => {
  const {user, chefID, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {
        
    })
    .catch( error => {
        console.log(error);
    })
  }
  return (
    <div className="container mx-auto  shadow-md  mb-2 sticky z-50   top-0">
      <div className="navbar bg-base-100 rounded ">
        <div className="md:navbar-start">
          <div className="dropdown ">
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
              className="menu menu-compact font-bold dropdown-content mt-3 p-2 google-btn-shadow bg-base-100 rounded-xl w-52"
            >
              {/* ------------Styles of Small devices--------------- */}
              <li>
                    {
                  user && <div
                  className="tooltip tooltip-bottom tooltip-success"
                  data-tip={user?.displayName}
                >
                  <div className="avatar online mx-2">
                    <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                }
              </li>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              {
                user &&  <li>
                <NavLink to={`/chefDetails/${chefID}`}>Chef Recipes</NavLink>
              </li>
              }
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blog</NavLink>
              </li>

              <li>
                  {
                user ? <li className="bg-red-500 text-white mt-3 uppercase" onClick={handleLogOut} >
               Logout
              </li> : <NavLink to="/login" >
                Login
              </NavLink>
              }
              </li>
              
            </ul>
          </div>

          <a className="   font-bold text-xl md:text-2xl w-full">
            FoodChef India
          </a>
        </div>
        {/* ------------Style for large Device-------- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500 bg-transparent" : ""
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
           {
            user &&  <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 bg-transparent" : ""
              }
              to={`/chefDetails/${chefID}`}
            >
              Chef Recipes
            </NavLink>
          </li>
           }
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500 bg-transparent" : ""
                }
                to="/register"
              >
                Register
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
          {
            user ? <button onClick={handleLogOut} className="btn btn-primary bg-red-700 border-0">
            Logout
          </button> : <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          }

          {
            user && <div
            className="tooltip tooltip-bottom tooltip-primary"
            data-tip={user?.displayName}
          >
            <div className="avatar online mx-2">
              <div className="w-12 rounded-full">
              <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
