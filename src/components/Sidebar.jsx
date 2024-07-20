import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { IoVideocamOutline } from "react-icons/io5";
import { GoVideo } from "react-icons/go";
import { LuListVideo } from "react-icons/lu";
import { LuMusic2 } from "react-icons/lu";
import { HiOutlineFire } from "react-icons/hi2";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineReport } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

const Sidebar = ({isVisible}) => {
  const sidebarData = [
    {
      id: 1,
      iconName: "Home",
      icon: <GoHome size={22} />,
    },
    {
      id: 2,
      iconName: "Shorts",
      icon: <GoVideo size={22} />,
    },
    {
      id: 3,
      iconName: "Subscriptions",
      icon: <MdOutlineSubscriptions size={22} />,
    },
  ];

  const sidebarDataYou = [
    {
      id: 1,
      iconName: "Your channel",
      icon: <PiUserSquareThin size={22} />,
    },
    {
      id: 2,
      iconName: "History",
      icon: <MdHistory size={22} />,
    },
    {
      id: 3,
      iconName: "Playlists",
      icon: <LuListVideo size={22} />,
    },
    {
      id: 4,
      iconName: "Your videos",
      icon: <BiVideo size={22} />,
    },
    {
      id: 5,
      iconName: "Watch later",
      icon: <MdOutlineWatchLater size={22} />,
    },
    {
      id: 6,
      iconName: "liked videos",
      icon: <AiOutlineLike size={22} />,
    },
  ];

  const exploreData = [
    {
      id: 1,
      iconName: "Trending",
      icon: <HiOutlineFire size={22} />,
    },
    {
      id: 2,
      iconName: "Music",
      icon: <LuMusic2 size={22} />,
    },
    {
      id: 3,
      iconName: "Gaming",
      icon: <IoGameControllerOutline size={22} />,
    },
    {
      id: 4,
      iconName: "News",
      icon: <FaRegNewspaper size={22} />,
    },
    {
      id: 5,
      iconName: "Sports",
      icon: <TfiCup size={22} />,
    },
  ];

  const settingData = [
    {
      id: 1,
      iconName: "Setting",
      icon: <IoSettingsOutline size={22} />,
    },
    {
      id: 2,
      iconName: "Report history",
      icon: <MdOutlineReport size={22} />,
    },
    {
      id: 3,
      iconName: "Help",
      icon: <IoMdHelpCircleOutline size={22} />,
    },
    {
      id: 4,
      iconName: "Send feedback",
      icon: <MdOutlineFeedback size={22} />,
    },
  ];

  const youtubeData = [
    {
      id: 1,
      iconName: "Youtube Premi",
    },
    {
      id: 2,
      iconName: "Youtube Music",
      icon: <MdOutlineReport size={22} />,
    },
    {
      id: 3,
      iconName: "Youtube Studio",
      icon: <IoMdHelpCircleOutline size={22} />,
    },
    {
      id: 4,
      iconName: "Youtube Kids",
      icon: <MdOutlineFeedback size={22} />,
    },
  ];
  return (
    <>
      <div className={`sidebar ${isVisible ? "visible" : ""}`}>
        <div className="space-y-1">
          {sidebarData.map((elm, i) => (
            <div key={i}>
              <div className="flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg">
                {elm.icon}
                <span>{elm.iconName}</span>
              </div>
            </div>
          ))}
          <hr />
          <h2 className="font-semibold text-[17px] flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg">
            You{" "}
          </h2>
          {sidebarDataYou.map((elm, i) => (
            <div key={i}>
              <div className="flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg">
                {elm.icon}
                <span>{elm.iconName}</span>
              </div>
            </div>
          ))}
          <hr />
          <h2 className="font-semibold text-[17px] flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg">
            Explore{" "}
          </h2>

          {exploreData.map((elm, i) => (
            <div key={i}>
              <div className="flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg">
                {elm.icon}
                <span>{elm.iconName}</span>
              </div>
            </div>
          ))}
          <hr />
          <h2 className="font-semibold text-[17px] flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg">
            More From Youtube{" "}
          </h2>
          {youtubeData.map((elm, i) => (
            <div key={i}>
              <div className="flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg">
                <img src="/assets/youtube.png" className="w-5" />
                <span>{elm.iconName}</span>
              </div>
            </div>
          ))}
          <hr />

          {settingData.map((elm, i) => (
            <div key={i}>
              <div className="flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg">
                {elm.icon}
                <span>{elm.iconName}</span>
              </div>
            </div>
          ))}
          <hr />
          <p className="text-sm px-4 font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="px-4 text-sm mt-2 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam.
          </p>
          <div className="px-4 text-sm text-gray-500">©️ 2024 Google LLC</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
