import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSettings } from "react-icons/fi";
import Setting from "./setting_comp/Setting";

const Navbar = () => {
  return (
    <nav className="w-[13rem] bg-blue-200">
      <div className="h-screen overflow-y-auto">
        <div className="flex flex-col h-full px-2 py-1 gap-1">
          <div className="basis-[10%] bg-slate-400">
            <h1>Header</h1>
          </div>
          <div className="basis-[80%] bg-green-300">
            <h1>Links</h1>
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
