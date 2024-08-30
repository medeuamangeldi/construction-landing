import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Our Services",
    href: "#services",
    Icon: FiSearch,
  },
  {
    title: "Gallery",
    href: "#gallery",
    Icon: IoPricetagsOutline,
  },
  {
    title: "About us",
    href: "#aboutus",
    Icon: RiTeamLine,
  },
  {
    title: "Our Contacts",
    href: "#contacts",
    Icon: PiChatCircleBold,
  },
];
