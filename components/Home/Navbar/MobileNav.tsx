import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/constant/contant";
import Link from "next/link";

type openProps = {
  open: boolean;
};

const MobileNav = ({ open }: openProps) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0, y: -100 }}
          className=" top-20 left-0 w-full h-full z-20 fixed"
        >
          <div
            className="text-xl font-semibold uppercase bg-orange-400
            text-white lg:my-5 my-16 p-4 rounded-s-xl flex flex-col gap-5
          "
          >
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url} className="">
                  <p className="nav_link">{navLink.label}</p>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
