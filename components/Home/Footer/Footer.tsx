import { navLinks } from "@/constant/contant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-16 bg-[#0f0715] flex flex-col items-center " id="footer">
      <div className="text-center mb-4 border-b w-[40%] py-2">
        <h1 className="font-semibold text-2xl tracking-widest ml-[-1.5rem] sm:ml-[0] text-white ">
          Sadan Imam
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 text-white font-bold">
        {navLinks.map((navLink) => {
          return (
            <Link key={navLink.id} href={navLink.address}>
              <p className="text-[#61dafb] hover:text-white font-normal">{navLink.label}</p>
            </Link>
          );
        })}
        {/* <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">Services</a>
        </div>
        <div>
          <a href="#">Projects</a>
        </div>
        <div>
          <a href="#">Reviews</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div> */}
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2025 · Made with Love and NextJs
      </p>
    </div>
  );
};

export default Footer;
