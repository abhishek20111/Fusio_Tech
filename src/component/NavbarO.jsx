import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import '../App.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import GIF from '../assets/GIF.gif'
import { useSelector } from 'react-redux';
import { selectLoading } from '../store/UserSilce.js';



export default function Navbar() {
    const [state, setState] = useState(false)

    const navigate = useNavigate();

    const USER_TYPE = {
        PUBLIC: 'Public User',
        USER: 'User',
        ADMIN: 'Admin',
        SUPER_ADMIN: 'Super Admin',
    }


    const token = useSelector((state) => state.userData.token);
    const isLogin = useSelector((state) => state.userData.isLogin);
    const CURRENT_USER_TYPE = useSelector((state) => state.userData.role);
    console.log(CURRENT_USER_TYPE)
    return (

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img
                        src={GIF}
                        className="h-[76px] sm:ml-3 sm:h-12"
                        alt="Flowbite Logo"
                    />
                </Link>


                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/courses"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Courses
                            </Link>
                        </li>
                        {isLogin ? <li>
                            <Link
                                to="/myCourse"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                My Courses
                            </Link>
                        </li> : null}
                        {(CURRENT_USER_TYPE === USER_TYPE.ADMIN || CURRENT_USER_TYPE === USER_TYPE.SUPER_ADMIN) ?
                            <li>
                                <Link
                                    to="/manage"
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Manage
                                </Link>
                            </li>
                            :
                            <li>
                                <Link
                                    to="/intern"
                                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Internships
                                </Link>
                            </li>}
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>

                <div class=" md:order-5 items-center justify-center bg-gray-200 ">
                    <div class="group relative cursor-pointer ">
                        <div class="flex items-center justify-between space-x-5 bg-white " onClick={() => { }}>
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src={`https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png`}
                                alt="user photo"
                            />
                        </div>
                        <div class="invisible w-[170px] right-0 mr-2 absolute z-50 flex  flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible" onClick={() => { }}>
                            {isLogin ? (
                                <div>
                                    <div className=" py-3">
                                        <span className="block text-sm rounded text-gray-900 dark:text-white">
                                            Bonnie Green
                                        </span>
                                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                            name@flowbite.com
                                        </span>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <Link
                                                to="/UserProfile"
                                                className="block px-4 py-2 text-sm hover:rounded  hover:bg-blue-500 hover:text-lg transition-all hover:text-white text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm  hover:rounded hover:bg-blue-500 hover:text-lg transition-all hover:text-white text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm hover:rounded hover:bg-blue-500 hover:text-lg transition-all hover:text-white text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Earnings
                                            </a>
                                        </li>
                                        <li>
                                            <div
                                                onClick={() => { navigate('/logout') }}
                                                className="block px-4 py-2 text-sm  hover:rounded hover:bg-blue-500 hover:text-lg transition-all hover:text-white text-gray-700  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Sign out
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="border rounded-md py-2">
                                    <Link to="/signin">
                                        <p className="px-4 py-2 mx-3 border-b rounded-md hover:bg-blue-500 hover:text-lg transition-all hover:text-white">
                                            Log-In
                                        </p>
                                    </Link>
                                    <Link to="/signup">
                                        <p className="px-4 py-2 mx-3 border-t rounded-md hover:bg-blue-500 hover:text-lg transition-all hover:text-white">
                                            SignUp
                                        </p>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                        </button>
                    </div>

                </div>

            </div>
        </nav>
    )
}
