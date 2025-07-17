import React, { useContext } from "react";
import Navbar from "./Navbar";
import logo from "../../assets/logo/logo.png";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="w-full bg-[#0d1117] dark:bg-[#8b949e] text-[#f0f6fc] h-10  font-Poppins ">
        <div className="max-w-7xl mx-auto h-full">
          <div className="w-full flex justify-end items-center h-full">
            <button className="mr-4">Sign in / Guest</button>
            <button className="mr-4">Create an Account</button>
          </div>
        </div>
      </div>

      <header className="w-full h-20 dark:bg-[#0d1117] dark:text-[#f0f6fc]  font-Poppins  border-b-2 border-b-black dark:border-b-2 dark:border-b-[#f0f6fc]">
        <div className="flex max-w-7xl justify-between mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex w-full items-center">
            <div className="h-full flex items-center">
              <img src={logo} alt="Logo" className="h-18 w-18 mr-5" />
            </div>
            <Navbar />
          </div>

          <div className="h-full w-full max-w-[300px] flex items-center justify-end cursor-pointer space-x-1">
            <button
              onClick={toggleTheme}
              className="text-3xl p-3 cursor-pointer"
            >
              {theme === "dark" ? <FiSun /> : <MdDarkMode />}
            </button>
            <button className="text-3xl p-4 rounded-full hover:bg-gray-400/40 bg-opacity-40 cursor-pointer transition-colors duration-[160ms]">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
