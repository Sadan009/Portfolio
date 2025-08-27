"use client";
import { navLinks } from "@/constant/contant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { HiBars3BottomRight } from "react-icons/hi2";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);
  const [open, setOpen] = useState(false);

  const closeNav = () => {
    if (open) {
      setOpen(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#000]" : "fixed"
      } h-[15vh] z-[10]  w-full transition-all duration-200`}
      onClick={closeNav}
      id="nav"
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <img src="/images/panda-logo.png" alt="Sadan Imam" className="lg:h-56 lg:w-56 md:h-48 md:w-48 w-32 h-32 sm:w-28 sm:h-28 " />
        {/* <h1 className="font-semibold text-2xl tracking-widest ml-[-1.5rem] sm:ml-[0] text-white">
          Sadan Imam
        </h1> */}

        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.address}>
                  <p className="nav_link text-[#61dafb]">{navLink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* Buttons */}
          <div className="flex items-center  space-x-4">
            <a href="#contact" className="md:px-10 md:py-3 lg:px-8 lg:py-3 p-1 text-blue-800 font-semibold sm:text-base lg:text-lg text-sm bg-white hover:bg-gray-400 transition-all duration-200 rounded-lg">
              Hire Me
            </a>
            {/* Burger Menu */}

            {open ? (
              <HiBars3BottomRight
                onClick={() => setOpen(!open)}
                className="w-8 h-8 cursor-pointer text-white lg:hidden"
              />
            ) : (
              <HiBars3
                onClick={() => setOpen(!open)}
                className="w-8 h-8 cursor-pointer text-white lg:hidden 
"
              />
            )}

            {open && <MobileNav open={open} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
