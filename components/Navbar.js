import React from "react";
import opensea from "../assets/opensea.svg";
import textlogo from "../assets/textlogo.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GrSearch } from "react-icons/Gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 items-center">
      {/* Left */}
      <div className="flex items-center mr-9 shrink-0">
        <div className="mr-2">
          <Image src={opensea} alt="" className="w-[2.5rem]" />
        </div>

        <div className="">
          <Image src={textlogo} alt="" className="w-[7rem]" />
        </div>
      </div>

      {/* Middle */}
      <div className="hidden sm:flex w-full relative items-center">
        <input
          className="bg-[#e3f0fc] rounded-md w-full p-2 py-3 pl-[2.5rem] pr-8"
          type="text"
          placeholder="Search items, collections, and accounts"
        />
        <FaSearch className="absolute text-[22px] left-[0.8rem] text-gray-400" />
        {/* absolute to put "/" inside of the input */}
        <div className="bg-gray-300 p-1 absolute right-[0.8rem] py-1 px-2.5 rounded-[0.5rem] text-gray-500 text-[12px]">
          /
        </div>
      </div>

      {/* Right */}
      <div className="flex space-x-[1.25rem] lg:space-x-[1.75rem] ml-8">
        <BiUserCircle className="w-[2.2rem] h-[2.2rem] hidden lg:flex" />
        <MdOutlineAccountBalanceWallet className="w-[2.2rem] h-[2.2rem] hidden lg:flex" />
        <GrSearch className="w-[2.1rem] h-[2.1rem] sm:hidden" />
        <MdOutlineShoppingCart className="w-[2.2rem] h-[2.2rem]" />
        <FiMenu className="w-[2rem] h-[2rem]" />
      </div>
    </div>
  );
};

export default Navbar;
