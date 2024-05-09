import { ReactNode } from "react";
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
  BiBriefcaseAlt,
  BiCog,
} from "react-icons/bi";
type NAV_LINK = {
  id: number;
  name: string;
  icon: any;
  link: string;
  isActive?: boolean;
};
const nav_links: NAV_LINK[] = [
  {
    id: 1,
    link: "/",
    name: "Home",
    icon: <BiHome size={30} />,
  },
  {
    id: 2,
    link: "/about",
    name: "About",
    icon: <BiUser size={30} />,
  },
  {
    id: 2.5,
    link: "/portfolio",
    name: "Portfolio",
    icon: <BiBriefcaseAlt size={30} />,
  },
  {
    id: 3,
    link: "/note_and_concept",
    name: "Notes",
    icon: <BiNote size={30} />,
  },
  {
    id: 4,
    link: "/blog",
    name: "Blog",
    icon: <BiLogoBlogger size={30} />,
  },
  {
    id: 5,
    link: "/contact",
    name: "Contact",
    icon: <BiPhone size={30} />,
  },
];

export default nav_links;
