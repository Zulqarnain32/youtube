import React from 'react'
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
const Sidebar = () => {

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
            icon: < MdOutlineSubscriptions size={22} />,
        },
      
    ]

    const sidebarDataYou = [
        {
            id: 0,
            iconName: "You  >",
        },
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
            icon: < LuListVideo size={22} />,
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
            icon: < AiOutlineLike size={22} />,
        },
    ]
    return (
        <>
            <div className='px-3 py-5 w-[16%] '>
                <div className='space-y-1'>

                    {sidebarData.map((elm, i) => (
                        <div key = {i} >
                            <div  className='flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg'>
                                {elm.icon}
                                <span>{elm.iconName}</span>
                            </div>
                        </div>
                    ))}
                    <hr className='mt-3'/>

                    {sidebarDataYou.map((elm, i) => (
                        <div key = {i}>
                            <div  className='flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg'>
                                {elm.icon}
                                <span>{elm.iconName}</span>
                            </div>
                        </div>
                    ))}
                    <hr className='mt-3'/>
                   
                </div>
            </div>
        </>
    )
}

export default Sidebar
