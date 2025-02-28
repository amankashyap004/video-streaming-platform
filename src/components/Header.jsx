import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenu(!isSideMenu);
  };

  return (
    <header className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full shadow-sm">
        <nav className="container px-4 lg:px-10 py-4 flex  justify-between items-center">
          <div class="">
            <Link to={"/"}>
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-pink-600 to-pink-900 hover:from-pink-900 hover:to-pink-600">
                Dreel
              </p>
            </Link>
          </div>
          <div>
            <div className="hidden lg:block">
              <AuthNav />
            </div>
            <div
              className="lg:hidden text-3xl cursor-pointer"
              onClick={toggleSideMenu}
            >
              {isSideMenu ? <IoClose /> : <IoMenu />}
            </div>
          </div>
        </nav>
      </div>
      {isSideMenu && (
        <div className="relative lg:hidden flex justify-center items-start mt-4 pt-16 h-screen w-full">
          <AuthNav />
        </div>
      )}
    </header>
  );
};

export default Header;

const AuthNav = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
      <Link
        to={`/blog`}
        className="text-lg font-semibold rounded-lg py-2 px-6 border-[2px] border-pink-600 hover:border-pink-800 outline-none"
      >
        Blog
      </Link>

      <button className="text-lg font-semibold rounded-lg py-2 px-6 border-[2px] border-pink-600 hover:border-pink-800 outline-none">
        Login
      </button>
      <button className="text-lg font-semibold rounded-lg py-2 px-6 border-[2px] border-pink-600 hover:border-pink-800 outline-none">
        Sigh Up
      </button>
    </div>
  );
};
