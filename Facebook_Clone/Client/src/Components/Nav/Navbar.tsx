

import { TiHome } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { RiGamepadLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdFeedback } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";



const Navbar = () => {
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [mssgIsOpen, setMssgIsOpen] = useState(false);
  const navigate = useNavigate();


  const chatList = [
    {
      name: "Steve Jobs",
      profileImg: "./contact-list/steve jobs.jpg",
      mssg:"let's collaborate.",
      time: "2m"
    },
    {
      name: "Arjit Singh",
      profileImg: "./contact-list/Arjit singh.jpg",
      mssg:"Hi",
      time: "5m"
    },
    {
      name: "Lionel Messi",
      profileImg: "./contact-list/messi.jpg",
      mssg:"Hi Buddy",
      time: "7m"
    },
    {
      name: "Ronaldo",
      profileImg: "./contact-list/ronaldo.jpg",
      mssg:"hey, what's up?",
      time: "10 min"
    },
    {
      name: "Carry Minati",
      profileImg: "./contact-list/Carry Minati.jpg",
      mssg:"Hi sagar",
      time: "2m"
    },
  ]




  return (

    <>
      <nav className="shadow w-full bg-white sticky top-0 z-50">
        {/* <div className="p-2.5 flex gap-20"> */}
        <div className=" mx-auto p-2.5 flex gap-12  items-center">

          <div className="logo-search  flex w-[25%] relative">

            <img src="facebook-logo.png" alt="" className="h-10" />
            <CiSearch className="h-[41px] w-[23px] absolute left-[68px]" />
            <input type="search"
              className="bg-[#f0f2f5]
             ml-2
             rounded-4xl
             pl-12
             w-full"

              placeholder="Search Facebook" />
          </div>
          <div className="list-items w-[58%]">
            <ul className="flex gap-2  items-center">
              <li className=" px-[41px] rounded-md  hover:bg-gray-200 active:border-b-2 border-blue-700" title="Home" ><TiHome className="h-10 w-[30px]" /></li>
              <li className=" px-[41px] rounded-md  hover:bg-gray-200 active:border-b-2 border-blue-700" title="Video"><MdOndemandVideo className="h-10 w-[30px]" /></li>
              <li className=" px-[41px] rounded-md  hover:bg-gray-200 active:border-b-2 border-blue-700" title="Marketplace"><BsShop className="h-10 w-[30px]" /></li>
              <li className=" px-[41px] rounded-md  hover:bg-gray-200 active:border-b-2 border-blue-700" title="Groups"><MdGroups className="h-10 w-[30px]" /></li>
              <li className=" px-[41px] rounded-md  hover:bg-gray-200 active:border-b-2 border-blue-700" title="Gaming"><RiGamepadLine className="h-10 w-[30px]" /></li>
              <i className="fa-light fa-gamepad"></i>
            </ul>
          </div>


          {/* ******************right components********************** */}
          <div className="right-components flex items-center gap-2">
            <ul className="flex items-center gap-2">
              <li className="cursor-pointer bg-gray-200 rounded-full p-3">
                <PiDotsNineBold className="text-xl" />
              </li>
              {/* ********************** Toggle the switch *************** */}
              <button
                onClick={() => {
                  setMssgIsOpen(!mssgIsOpen);
                  setProfileIsOpen(false);

                }}
              >
                <li className="cursor-pointer bg-gray-200 rounded-full p-3">

                  <FaFacebookMessenger className="text-xl" />
                </li>
              </button>
              <li className="cursor-pointer bg-gray-200 rounded-full p-3">
                <IoNotifications className="text-xl" />
              </li>

              {/* ********************** Toggle the switch *************** */}
              <button
                onClick={
                  () => {
                    setProfileIsOpen(!profileIsOpen)
                    setMssgIsOpen(false)
                  }
                }>
                <li className="cursor-pointer rounded-full">

                </li>
                <img src="user.jpg" alt="User Profile" className="w-[40px] h-[40px] object-cover rounded-full" />
              </button>
            </ul>
          </div>
        </div>


      </nav>

      {/* *****************************Profile open section ************************************************** */}
      <div className={`profile w-[24rem] bg-white z-50 fixed top-17 right-0 h-auto rounded-2xl shadow
          transition-transform duration-300 ease-in-out
          ${profileIsOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="options p-4">
          <div className="img-section flex items-center gap-4">
            <img src="user.jpg" alt="user.jpg" className="h-10 w-10 rounded-full" />
            <h3 className="text-xl font-semibold">Sanjeev Gurung</h3>
          </div>
          <div className="pt-4">
            <hr className=" border border-gray-300" />
            <div className="overflow-y-auto mt-2 pr-2 space-y-3">
              {[
                { icon: <IoSettingsSharp />, label: "Setting & privacy" },
                { icon: <MdHelp />, label: "Help & supports" },
                { icon: <FaMoon />, label: "Display & accessibility" },
                { icon: <MdFeedback />, label: "Give feedback" },
                { icon: <RiLogoutBoxRLine />, label: "Logout" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center  gap-2 hover:bg-gray-200 rounded-lg p-2" onClick={() => {
                  if (item.label === "Logout") {
                    // Close both profile and message boxes
                    setProfileIsOpen(false);
                    setMssgIsOpen(false);
                    // Navigate to login page
                    navigate("/login");
                  }
                }}>
                  <div className="bg-gray-300 rounded-full p-[10px]">

                    <span className="h-[30px] w-[30px]  text-[25px] object-cover ">{item.icon}</span>
                  </div>
                  <span className="font-semibold ">{item.label}</span>
                </div>
              ))}

              {/* <div className="flex items-center gap-2 hover:bg-gray-200 rounded-lg p-2">
                          <MdKeyboardArrowDown className="bg-gray-300 h-[25px] w-[30px] rounded-full" />
                          <span>See More</span>
                        </div> */}
            </div>

          </div>
        </div>
      </div>

      {/* ******************************* Message box section ************************************* */}
      <div className={`profile w-[24rem] bg-white z-50 fixed top-17 right-0 h-auto rounded-2xl shadow
          transition-transform duration-300 ease-in-out
          ${mssgIsOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="options p-4">
          <div className="img-section flex items-center gap-4 justify-between">

            <div>

              <h3 className="text-2xl font-bold">Chats</h3>
            </div>
            <div className="flex gap-4">


              <HiDotsHorizontal />
              <FaExpandArrowsAlt />
              <FaRegPenToSquare />
            </div>


          </div>
          <input type="search" className="w-full mt-6 rounded-full py-2 bg-[#f0f2f5] pl-11" placeholder="Search Messenger" />
          <IoSearchOutline className="relative bottom-7 left-3 text-xl" />
          <div className="message-Groups flex gap-4">

            <span className="rounded-2xl px-4 py-2 font-semibold hover:bg-[#f0f2f5]">Inbox</span>
            <span className="rounded-2xl px-4 py-2 font-semibold hover:bg-[#f0f2f5]">Communities</span>
          </div>



          <div className="pt-4">
            <div className="overflow-y-auto mt-2 pr-2 space-y-3">
              {chatList.map((chat, index) => (

                <div key={index} className="flex items-center gap-4  px-1 py-1 hover:bg-[#f0f2f5] w-full rounded-2xl">

                  <img src={chat.profileImg} alt={chat.name} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <h3>{chat.name}</h3>
                    <span>{chat.mssg}.</span> <span>{chat.time}</span>
                  </div>
                </div>
              ))}


            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
