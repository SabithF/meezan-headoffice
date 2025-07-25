import React, { useState, useEffect, useRef } from "react";

function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef();

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsNavOpen(false);
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${scrolled
                    ? "bg-blue-800/35 backdrop-blur-sm shadow-xl rounded-xl px-6 py-2 top-6 w-[90%] md:w-[80%]"
                    : "w-full left-0 bg-white/20 backdrop-blur-sm text-white px-4 py-3"
                }`}
        >
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                {/* Logo */}
                <a href="/">
                    <img
                        src="/assets/img/meez-logo.png"
                        alt="Logo"
                        className="h-14 py-4 flex justify-center items-center"
                    />
                </a>

                {/* Hamburger button */}
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className="md:hidden p-2 rounded"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={
                                isNavOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>

                {/* Menu items */}
                <div
                    className={`${isNavOpen ? "block" : "hidden"
                        } md:flex md:items-center md:space-x-6 absolute md:static top-full left-0 rounded-xl mt-3 md:mt-0 w-full md:w-auto bg-slate-800 text-white md:bg-transparent text-sm font-semibold uppercase md:text-inherit mx-1 md:mx-0 py-10 px-5 md:p-0 text-center`}
                >
                    <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 md:text-white text-center">
                        <li>
                            <a href="/" className="hover:text-blue-300">
                                Home
                            </a>
                        </li>

                        {/* Dropdown */}
                        <li className="relative items-center justify-center text-center">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center justify-center hover:text-blue-300 uppercase w-full whitespace-nowrap"
                            >
                                Our Presence
                                <svg className="ml-2 w-3 h-3" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeWidth="2" d="M1 1l4 4 4-4" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full mt-2 bg-white text-black shadow-lg p-4 z-50 w-64">
                                    <ul className="space-y-2 text-sm">
                                        <li><a href="#">Plantations</a></li>
                                        <li><a href="#">Hardware</a></li>
                                        <li><a href="#">Hospitality</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <a href="/news" className="hover:text-blue-300">
                                News
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="bg-slate-900 p-3 text-white rounded-lg hover:text-blue-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
