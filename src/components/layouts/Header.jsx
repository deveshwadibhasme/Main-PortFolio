import React, { useEffect, useState } from "react";
import Logo from "/letter-logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const [navItems,setNavItems] = useState([])
 
  const navItemList = [
    { title: "Home", link: "/" },
    { title: "Project", link: "/project" },
    { title: "Experience", link: "/experience" },
    { title: "Education", link: "/education" },
  ]

  const location = useLocation();
  useEffect(() => {
      setNavItems(navItemList)
      console.log('hi');
  },[location.pathname])  



  return (
    <header className="text-2xl min-h-15 z-4 relative max-w-screen-lg border-1 overflow-hidden border-violet-500 rounded-full text-center backdrop-blur-2xl flex items-center gap-14 px-10 bg-black/20 mx-auto">
      <div className="title h-15 w-15">
        <img className="h-full w-full" src={Logo} alt="" />
      </div>
      <nav className="max-w-1/2 w-full text-lg hidden justify-between items-center h-15 text-white md:flex">
        {navItems.map((item, index) => {
          return (
            <Link to={item.link} key={index} className={`nav-link ${location.pathname !== item.link ? "" : "active"} relative`}>
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="text-lg z-20 text-white ml-auto font-bold bg-violet-900 p-2 rounded-4xl hover:bg-violet-700 px-10 hover:cursor-pointer hidden md:flex">
        Contact
      </div>
      <div className="flex md:hidden flex-col gap-1 w-10 ml-auto">
        <span className="bg-white h-[2px] w-1/3"></span>
        <span className="bg-white h-[2px] w-1/2"></span>
        <span className="bg-white h-[2px] w-full"></span>
      </div>
    </header>
  );
};

export default Header;
