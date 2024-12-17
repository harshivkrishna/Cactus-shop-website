import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "./Navigation.scss";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-slate-800 transition-all duration-300 z-50"
          : ""
      }`}
    >
      <div className="container navigation-wrap">
        <div className="flex justify-between p-5 wrapper">
          {/* Left */}
          <div className="flex items-center gap-2 left">
            <span>
              <img src="../../../public/assets/favicon.png" alt="" />
            </span>
            <NavLink to="/" className="font-bold text-white">
              Cactus
            </NavLink>
          </div>

          {/* Center */}
          <div className="items-center justify-center hidden gap-4 lg:flex center link-wrap">
            <HashLink className="text-white " smooth to="/#banner">
              Home
            </HashLink>
            <HashLink className="text-white " smooth to="/#new">
              New
            </HashLink>
            <HashLink className="text-white " smooth to="/#shop">
              Shop
            </HashLink>
            <HashLink className="text-white " smooth to="/#care">
              Care
            </HashLink>
            <HashLink className="text-white " smooth to="/#contact">
              Contact
            </HashLink>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 right">
            <NavLink to="/" className="text-white">
              <FaRegUser />
            </NavLink>
            <NavLink to="/" className="text-white">
              <IoCartOutline />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
