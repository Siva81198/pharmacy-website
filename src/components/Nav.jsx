import { BadgePercent, MapPinned, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { logo } from "../assets/images";

const Nav = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1], // Smooth easing curve
      }}
      className="padding-x py-4 fixed top-0 h-auto z-10 w-full bg-slate-200 shadow-lg"
    >
      <nav className="flex justify-between items-center max-container h-full">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            width={159}
            height={69}
            className="m-0 w-[119px] h-[50px]"
          />
        </a>
        <a
          href="/"
          className="font-montserrat leading-normal pr-6 text-xs text-black flex items-center ml-8 max-w-md transition-transform duration-300 hover:scale-105 hover:text-green-950"
        >
          <span className="hidden md:inline mr-2 transition-transform duration-300 hover:rotate-12">
            <MapPinned />
          </span>
          <span className="hidden md:inline text-xs">
            Shop no. 7, Madhav Mahal, Chulna Road, Near Mount Carmel School, Suyog Nagar, Vasai West, MH-401202
          </span>
        </a>

        <ul className="flex-1 flex justify-end items-center gap-4 lg:gap-14">
        <li>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="font-montserrat leading-normal text-xs text-black flex items-center group relative"
            >
            <span className="mr-2 md:hidden transition-transform duration-300 hover:rotate-12">
              <MapPinned />
            </span>
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#specialOffer"
              whileHover={{ scale: 1.05 }}
              className="font-montserrat leading-normal text-base text-black flex items-center group relative"
            >
              <span className="mr-2">
                <BadgePercent />
              </span>
              <span className="hidden lg:inline">Offers</span>
              <span className="absolute bottom-0 left-[50%] block h-[2px] w-0 bg-gray-800 group-hover:w-[30%] transition-all duration-300"></span>
            </motion.a>
          </li>

          <li>
            <motion.a
              href="#footer"
              whileHover={{ scale: 1.05 }}
              className="font-montserrat leading-normal text-base text-black flex items-center group relative"
            >
              <span className="mr-2">
                <PhoneCall />
              </span>
              <span className="hidden lg:inline whitespace-nowrap">Contact Us</span>
              <span className="absolute bottom-0 left-[50%] block h-[2px] w-0 bg-gray-800 group-hover:w-[30%] transition-all duration-300"></span>
            </motion.a>
          </li>
        </ul>

      </nav>
    </motion.header>
  );
};

export default Nav;
