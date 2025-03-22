import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import heroImage from "../assets/HeroImage.png"

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-black text-gray-400 max-w-full mx-auto h-24 flex justify-between items-center sm:px-20 px-6">
            {/* Logo */}
            <h1 className="text-3xl font-bold bg-gradient-to-r bg-pink-500 text-transparent bg-clip-text from-blue-500  to-pink-500">Harish Vijendiran</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
                <li className="p-3 hover:text-white"><a href="#about">About</a></li>
                <li className="p-3 hover:text-white"><a href="#work">Work</a></li>
                <li className="p-3 hover:text-white"><a href="#contact">Contact</a></li>
            </ul>
            {/* Mobile Menu Toggle */}
            <div onClick={handleNav} className="md:hidden cursor-pointer text-white">
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-[60%] bg-[#202121] transition-all duration-500 z-50 ${nav ? "left-0" : "left-[-100%]"}`}>
                <h1 className="text-3xl bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-pink-500 m-4 ">Harish Vijendiran</h1>
                <ul className="p-8 text-xl">
                    <li className="p-3 hover:bg-gray-700"><a href="#about">About</a></li>
                    <li className="p-3 hover:bg-gray-700"><a href="#work">Work</a></li>
                    <li className="p-3 hover:bg-gray-700"><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
