import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSettings } from "react-icons/fi";
import Setting from "./setting_comp/Setting";
import { NavLinks } from "@/types";

const Navbar = () => {
  return (
    <nav className="w-[13rem] bg-blue-200">
      <div className="h-screen overflow-y-auto">
        <div className="flex flex-col h-full gap-1">
          <div className="basis-[10%] bg-slate-400">
            <h1>Header</h1>
          </div>
          <div className="basis-[80%] bg-green-300 overflow-y-auto flex flex-col justify-between gap-4 py-4">
            {NavLinks.map((nav_link) => {
              return (
                <Link href={nav_link.link} key={nav_link.id} className="px-1">
                  <div className="flex items-center gap-5 text-xl px-4 py-3 font-semibold bg-pink-200">
                    {nav_link.icon}
                    {nav_link.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="basis-[10%] bg-gray-400">
            <h1>Setting</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
