import React, { useEffect, useState } from "react";
import Logo from "/letter-logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [navItems, setNavItems] = useState([]);
  const [nav, openNav] = useState(false);

  const navItemList = [
    { title: "Home", link: "/" },
    { title: "Project", link: "/project" },
    { title: "Experience", link: "/experience" },
    { title: "Education", link: "/education" },
  ];

  const location = useLocation();
  useEffect(() => {
    setNavItems(navItemList);
  }, [location.pathname]);

  const handlClick = () => {
    openNav(!nav);
  }

  return (
    <header className="text-2xl min-h-15 z-30 sticky top-5 w-full max-w-screen-lg border-1 md:overflow-hidden border-violet-500 rounded-full text-center backdrop-blur-2xl flex items-center gap-14 px-10 bg-black/20 mx-auto">
      <div className="title h-15 w-15">
        <img className="h-full w-full" src={Logo} alt="" />
      </div>
      <nav
        className={`max-w-[80%] md:max-w-1/2 w-full text-lg flex-col flex justify-between gap-6 border-violet-500 border-1 p-2 md:p-0 md:border-0 md:gap-0 items-center absolute md:relative left-1/2 md:left-0 translate-x-[-50%] md:translate-x-0 transition-all duration-500 ease-in-out ${nav ? 'top-15 visible opacity-100' : 'top-1 invisible md:visible opacity-0 md:opacity-100'} md:top-0 z-8 min-h-50 h-full bg-black/30 md:bg-transparent md:min-h-15 text-white md:flex-row`}
      >
        {navItems.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className={`nav-link ${
                location.pathname !== item.link ? "" : "active"
              } relative`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="text-lg relative z-10 text-white ml-auto font-bold bg-violet-900 p-2 rounded-4xl hover:bg-violet-700 px-10 hover:cursor-pointer hidden md:flex cursor-pointer">
        Contact
      </div>
      <div
        onClick={handlClick}
        className="flex md:hidden flex-col gap-1 w-10 ml-auto z-20"
      >
        <span className={`bg-white transition-all duration-300 ease-in h-[2px] ${!nav ? 'w-1/3' : 'w-full' }`}></span>
        <span className={`bg-white transition-all duration-300 ease-in h-[2px] ${!nav ? 'w-1/2' : 'w-1/2'}`}></span>
        <span className={`bg-white transition-all duration-300 ease-in h-[2px] ${!nav ? 'w-full' : 'w-1/3'}`}></span>
      </div>
    </header>
  );
};

export default Header;
