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
    icon: <BiHome />,
  },
  {
    id: 2,
    link: "/about",
    name: "About",
    icon: <BiUser />,
  },
  {
    id: 3,
    link: "/notes",
    name: "Notes",
    icon: <BiNote />,
  },
  {
    id: 4,
    link: "/blog",
    name: "Blog",
    icon: <BiLogoBlogger />,
  },
  {
    id: 5,
    link: "/contact",
    name: "Contact",
    icon: <BiPhone />,
  },
];

export default nav_links;
