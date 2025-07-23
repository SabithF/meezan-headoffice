import React, { useState, useEffect, useRef } from "react";

function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);



    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavOpen(false); // Close nav
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (


        <>
            <nav ref={navRef} className="fixed left-0 right-0   ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen bg-gray-600/30 bg-opacity-50 z-40 py-2 px-10 hover:bg-opacity-70">
                    <a href="">
                        <img src="src\assets\logo\group-logo.png"
                            alt="Logo"
                            className="w-20 rtl:space-x-reverse" />
                    </a>

                    {/* Hamburger menu */}
                    <button
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none"
                    >
                        {isNavOpen ? (
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>


                    <div
                        id="mega-menu-full"
                        className={`uppercase font-outfitv ${isNavOpen ? "block" : "hidden"
                            } absolute top-full left-0 w-full bg-gray-700/20 z-50 md:static md:flex md:w-auto md:order-1`}
                    > <ul className="flex flex-col md:flex-row  p-3  ">

                            <li>
                                <a href="#"
                                    className="block py-2 px-3 text-white rounded-sm                                
                                 hover:hover:text-[#f3cd8e] " aria-current="page">Home</a>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm hover:text-[#f3cd8e] uppercase"
                                >
                                    Our Presence
                                    <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>

                                {/* Dropdown appears below the button */}
                                <div
                                    id="mega-menu-full-dropdown"
                                    className={`${isDropdownOpen ? "block" : "hidden"
                                        } absolute left-0 top-full mt-2 w-64 z-50 bg-gray-50/20 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg`}
                                >
                                    <ul className="p-4 text-gray-900 dark:text-white space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <div className="font-semibold">Online Stores</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    Connect with third-party tools you're already using.
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <div className="font-semibold">Online Stores</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    Connect with third-party tools you're already using.
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <div className="font-semibold">Online Stores</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    Connect with third-party tools you're already using.
                                                </span>
                                            </a>
                                        </li>
                                        {/* Add more dropdown items if needed */}
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <a href="#"
                                    className="block py-2 px-3 text-white rounded-sm                                
                                 hover:hover:text-[#f3cd8e] " aria-current="page">news</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 text-white rounded-sm                                
                                 hover:hover:text-[#f3cd8e] " aria-current="page">contact</a>
                            </li>
                        </ul>
                    </div>



                </div>




            </nav >





        </>







    )
}

export default NavBar;