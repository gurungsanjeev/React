

import { TiHome } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { RiGamepadLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
const Navbar = () => {
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
                <PiDotsNineBold  className="text-xl"/>
              </li>
              <li className="cursor-pointer bg-gray-200 rounded-full p-3">
                <FaFacebookMessenger className="text-xl" />
              </li>
              <li className="cursor-pointer bg-gray-200 rounded-full p-3">
                <IoNotifications className="text-xl" />
              </li>
              <li className="cursor-pointer rounded-full">
                <img src="user.jpg" alt="User Profile" className="w-[40px] h-[40px] object-cover rounded-full" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
