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
            className={`fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-blue-800/30  backdrop-blur-sm shadow-xl"
                : "bg-transparent"
                } w-full text-white px-4 py-3 hover:bg-blue-800/70`}
        >

            <div className="flex items-center  justify-between md:justify-start max-w-screen-xl mx-auto">
                {/* Logo */}
                <a href="/">
                    <img
                        src="/assets/img/meez-logo.png"
                        alt="Logo"
                        className="h-14 py-4 flex justify-center items-center md:pr-4"
                    />
                </a>

                <div className=" hidden md:block py-4 border border-white " />

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
                    className={`${isNavOpen ? "block" : "hidden"} 
    md:flex md:items-center md:justify-between absolute md:static top-full right-3 rounded-xl mt-3 md:pl-4 md:mt-0  
    md:w-full bg-slate-800 text-white md:bg-transparent 
    text-sm font-semibold uppercase md:text-inherit w-60 md:mx-0 py-10 px-5 md:p-0 text-center`}
                >
                    {/* Left menu items */}
                    <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 md:text-white text-center">
                        <li>
                            <a href="/" className="hover:text-blue-300">
                                Home
                            </a>
                        </li>

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
                                <div className="absolute top-full mt-2 bg-white text-black shadow-lg p-4 z-50 w-64 rounded-lg right-3 md:left-6">
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Plantations",
                                            "Tea Factory",
                                            "Hardware & Plantation Division",
                                            "Hospitality",
                                            "Education",
                                            
                                        ].map((item, index) => (
                                            <li
                                                key={index}
                                                className="border border-transparent hover:border-slate-400/30 rounded-lg py-3 hover:bg-blue-200/50"
                                            >
                                                <a href="#">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <a href="/news" className="hover:text-blue-300">
                                News
                            </a>
                        </li>
                    </ul>

                    {/* Contact button aligned right on large screens */}
                    <div className="mt-6 md:mt-0 md:ml-auto">
                        <a
                            href="/contact"
                            className="p-3 text-white hover:text-blue-300 border border-white rounded-full"
                        >
                            Contact
                        </a>
                    </div>
                </div>



            </div>
        </nav>
    );
}

export default NavBar;
