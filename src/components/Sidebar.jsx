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
const Sidebar = () => {
    const sidebarData = [
        {  
            id:1,
            iconName:"Home",
            icon: <GoHome size={22} />,
        },
        {  
            id:2,
            iconName:"Shorts",
            icon: <SiYoutubeshorts size={22} />,
        },
        {  
            id:3,
            iconName:"Subscriptions",
            icon: < MdOutlineSubscriptions size={22} />,
        },
      
    ]
  return (
    <>
       <div className='px-3 py-5 w-[16%] '>
        <div className='space-y-1'>
           
            {sidebarData.map((elm,i) => (
                <>
                 <div className='flex items-center space-x-5 hover:bg-gray-100 cursor-pointer px-4 py-2 w-[100%] rounded-lg'>
                   {elm.icon}
                   <span>{elm.iconName}</span>
                </div>
                </>
            ))}
        </div>
        <br />
        <hr />
       </div>
    </>
  )
}

export default Sidebar
