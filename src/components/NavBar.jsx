import React, { useState, useEffect } from "react";
import logo from "../assets/logo/group-logo.png";

function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0  left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
            ${scrolled 
                ? "bg-white/20 backdrop-blur-sm shadow-xl rounded-xl px-6 py-2 top-6 w-[90%] md:w-[80%] text-gray-900"
                : "w-full  left-0 bg-white/20 backdrop-blur-sm text-white px-4 py-3"
            }`}
        >
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <a href="/">
                    <img src={logo} alt="Logo" className="w-20" />
                </a>

                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className="md:hidden p-2 rounded"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={
                            isNavOpen 
                                ? "M6 18L18 6M6 6l12 12"
                                : "M4 6h16M4 12h16M4 18h16"
                        } />
                    </svg>
                </button>

                <div className={`${isNavOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-6 absolute md:static top-full left-3 right-0 w-full  md:w-auto bg-meezanGold/20 
                md:bg-transparent text-sm font-semibold uppercase md:text-inherit p-4 md:p-0`}>
                    <ul className="flex flex-col  md:flex-row space-y-6 md:space-y-0 md:space-x-4 md:text-slate-900">
                        <li><a href="/" className="hover:text-[#f3cd8e]">Home</a></li>
                        <li className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center hover:text-[#f3cd8e] uppercase"
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
                        <li><a href="/news" className="hover:text-[#f3cd8e]">News</a></li>
                        <li><a href="/contact" className="hover:text-[#f3cd8e]  bg-slate-900 p-3  text-white rounded-lg">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
