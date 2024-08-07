import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { HiOutlineFolderPlus } from "react-icons/hi2";
const Navbar = () => {  
  return (
    <>
      <div className="flex justify-between px-3 md:px-7 py-3 h-16 sticky top-0 w-[100%] z-10  bg-blue-00 bg-white">
        <div className=" flex items-center md:space-x-4 ">
          <RxHamburgerMenu className="text-xl cursor-pointer hidden "  />
          <img src="/assets/logo.png" className=" w-[120px] cursor-pointer " />
        </div>

        <div className="flex  w-1/2   items-center">
          <div className="hidden  items-center  w-[88%] h-full bg-gray-400 rounded-full">
            <input
              type="text"
              placeholder=" Search"
              className="hidden border outline-none w-[90%] h-full rounded-l-full px-3 focus:border-gray-700"
            />
            <button className="bg-gray-100 hover:bg-gray-300 h-full w-[12%] flex items-center justify-center border rounded-r-full">
              <IoIosSearch size={"24px"} />
            </button>
          </div>
          <button className="bg-gray-100 ml-3 hidden h-10 w-10 border rounded-full flex items-center justify-center hover:bg-gray-300">
            <FaMicrophone size={"18px"} className="" />
          </button>
        </div>

        <div className="w-[160px] flex items-center justify-end space-x-3">
          <HiOutlineFolderPlus size={26} className= "rounded-full h-10 w-10 p-2 hover:bg-gray-200 cursor-pointer"/>
          <IoIosNotificationsOutline size={26}  className= "rounded-full h-10 w-10 p-2 hover:bg-gray-200 cursor-pointer"/>
          <span className="h-10 w-10 bg-slate-500 rounded-full flex items-center justify-center text-white cursor-pointer">Z</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
