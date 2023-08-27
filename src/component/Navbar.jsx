import React, { useState, useEffect } from "react";

import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import GIF from "../assets/Navbar.jpg";
import { useSelector } from "react-redux";
import { selectLoading } from "../store/UserSilce.js";

function Navbar() {
  const [state, setState] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();

  const USER_TYPE = {
    PUBLIC: "Public User",
    USER: "User",
    ADMIN: "Admin",
    SUPER_ADMIN: "Super Admin",
  };

  const location = useLocation();

  const token = useSelector((state) => state.userData.token);
  const isLogin = useSelector((state) => state.userData.isLogin);
  const detail = useSelector((state) => state.userData);
  useEffect(() => {
    setUserInfo(detail);
  }, []);
  const CURRENT_USER_TYPE = useSelector((state) => state.userData.role);
  console.log(CURRENT_USER_TYPE);
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link link to="/" className="flex items-center">
          <img
            src={GIF}
            className="md:w-[100px] ml-3 w-28"
            alt="Flowbite Logo"
          />
        </Link>

        <div className="flex items-center md:order-2">
          <Link
            to="/intern"
            className={`sm:hidden ${
              location.pathname === "/intern" ? "hidden" : ""
            }`}
          >
            <p
              className={`block outline outline-[1px] outline-offset-2 outline-blue-500 font-mono italic bg-blue-900 p-2 rounded-md  md:p-0 text-white hover:text-blue-700`}
            >
              Internships
            </p>
          </Link>
          {/* <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 darksssfocus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={`https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png`}
              alt="user photo"
            />
          </button> */}
          {/* <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow darksssbg-gray-700 darksssdivide-gray-600"
            id="user-dropdown"
          >
            {isLogin ? (
              <div className="w-fit">
                <div className="px-4 py-3">
                  {console.log(userInfo.name)}
                  <span className="block font-bold  text-md text-gray-900 darkssstext-white">
                    {userInfo.name}
                  </span>
                  <span className="block text-sm font-medium text-gray-500 truncate darkssstext-gray-400">
                    {userInfo.email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/UserProfile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 darkssshover:bg-gray-600 darkssstext-gray-200 darkssshover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 darkssshover:bg-gray-600 darkssstext-gray-200 darkssshover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 darkssshover:bg-gray-600 darkssstext-gray-200 darkssshover:text-white"
                    >
                      Earnings
                    </a>
                  </li> */}
          {/* <li>
                      <div
                        onClick={() => {
                          navigate("/logout");
                        }}
                        className="block cursor-pointer px-4 py-2 text-sm  hover:rounded hover:bg-blue-500 hover:text-lg transition-all hover:text-white text-gray-700  darkssshover:bg-gray-600 darkssstext-gray-200 darkssshover:text-white"
                      >
                        Sign out
                      </div>
                    </li>
                </ul>
              </div>
            ) : (
              <div className="border rounded-md py-2">
                <Link to="/signIn">
                  <p className=" px-4 py-2 mx-3 border-b border-blue-400 rounded-md hover:bg-blue-500 hover:text-lg transition-all hover:text-white">
                    Log-In
                  </p>
                </Link>
                <Link to="/signUp">
                  <p className=" px-4 py-2 mx-3 border-t border-blue-400 rounded-md hover:bg-blue-500 hover:text-lg transition-all hover:text-white">
                    SignUp
                  </p>
                </Link>
              </div>
            )}
          </div>  */}
          {/* <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 darkssstext-gray-400 darkssshover:bg-gray-700 darksssfocus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button> */}
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white darksssbg-gray-800 md:darksssbg-gray-900 darksssborder-gray-700">
            <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4  rounded md:bg-transparent ${
                  location.pathname === "/" ? "text-blue-700" : "text-gray-700"
                } md:p-0 darkssstext-white hover:text-blue-700`}
                aria-current="page"
              >
                <Link to="/">Home</Link>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className={`block py-2 pl-3 pr-4  rounded md:bg-transparent ${
                  location.pathname === "/courses" ? "text-blue-700" : "text-gray-700"
                } md:p-0 darkssstext-white hover:text-blue-700`}
              >
                <Link to="/courses">Courses</Link>
              </a>
            </li>
            {isLogin ? (
              <li>
                <Link
                  to="/myCourse"
                  className={`block py-2 pl-3 pr-4  rounded md:bg-transparent ${
                    location.pathname === "/myCourse" ? "text-blue-700" : "text-gray-700"
                  } md:p-0 darkssstext-white hover:text-blue-700`}
                >
                  My Courses
                </Link>
              </li>
            ) : null}
            {CURRENT_USER_TYPE === USER_TYPE.ADMIN ||
            CURRENT_USER_TYPE === USER_TYPE.SUPER_ADMIN ? (
              <li>
                <Link
                  to="/manage"
                  className={`block py-2 pl-3 pr-4  rounded md:bg-transparent ${
                    location.pathname === "/manage" ? "text-blue-700" : "text-gray-700"
                  } md:p-0 darkssstext-white hover:text-blue-700`}
                >
                  Manage
                </Link>
              </li>
            ) : ( */}
            <li>
              <Link
                to="/intern"
                className={`block py-2 pl-3 pr-4  rounded md:bg-transparent ${
                  location.pathname === "/intern"
                    ? "text-blue-700"
                    : "text-gray-700"
                } md:p-0 darkssstext-white hover:text-blue-700`}
              >
                Internships
              </Link>
            </li>
            {/* )} */}
            <li>
              <Link
                to="/about"
                className={`block py-2 pl-3 pr-4  rounded md:bg-transparent ${
                  location.pathname === "/about"
                    ? "text-blue-700"
                    : "text-gray-700"
                } md:p-0 darkssstext-white hover:text-blue-700`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
