import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSettings } from "react-icons/fi";
import Setting from "./setting_comp/Setting";
import {
  BiHome,
  BiUser,
  BiNote,
  BiLogoBlogger,
  BiPhone,
  BiChevronLeft,
  BiChevronRightCircle,
  BiSolidCategoryAlt,
  BiSolidBriefcase,
} from "react-icons/bi";

type NAV_LINK = {
  id: string;
  name: string;
  icon: string;
  link: string;
};
const nav_links = [];

const Navbar = () => {
  return (
    <nav className="w-[13rem] bg-blue-200">
      <div className="h-screen overflow-y-auto">
        <h1>Navbar</h1>
      </div>
    </nav>
  );
};

export default Navbar;
