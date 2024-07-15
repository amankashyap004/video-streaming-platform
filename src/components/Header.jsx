import React, { useState } from "react";

import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenu(!isSideMenu);
  };

  const closeSideMenu = () => {
    setIsSideMenu(false);
  };
  return (
    <header className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full shadow-sm">
      <nav className="container px-4 lg:px-10 py-4 flex  justify-between items-center">
        <div class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-pink-600 to-pink-900">
          Dreel
        </div>
        <div>
          <div className="hidden lg:block">
            <AuthNav />
          </div>
          <div
            className="lg:hidden text-3xl cursor-pointer"
            onClick={toggleSideMenu}
          >
            {isSideMenu ? <IoMenu /> : <IoClose />}
          </div>
        </div>
      </nav>

      </div>
      {!isSideMenu && (
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
      <button className="text-lg font-semibold rounded-lg py-2 px-6 border-[2px] border-pink-600 outline-none">
        Login
      </button>
      <button className="text-lg font-semibold rounded-lg py-2 px-6 border-[2px] border-pink-600 outline-none">
        Sigh Up
      </button>
    </div>
  );
};
