import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between border px-5 py-3 h-16 ">
        <div className=" flex items-center space-x-4 ">
          <RxHamburgerMenu className="text-xl " />
          <img src="/assets/youtube.png" className=" w-8 " />
        </div>

        <div className="flex  w-1/2   items-center">
          <div className="flex items-center  w-[88%] h-full bg-gray-400 rounded-full">
            <input
              type="text"
              placeholder=" Search"
              className="border outline-none w-[90%] h-full rounded-l-full px-3 focus:border-gray-700"
            />
            <button className="bg-gray-100 hover:bg-gray-300 h-full w-[12%] flex items-center justify-center border rounded-r-full">
              <IoIosSearch size={"24px"} />
            </button>
          </div>
          <button className="bg-gray-100 ml-3 h-10 w-10 border rounded-full flex items-center justify-center hover:bg-gray-300">
            <FaMicrophone size={"18px"} className="" />
          </button>
        </div>

        <div className="border  border-red-600">3</div>
      </div>
    </>
  );
};

export default Navbar;
