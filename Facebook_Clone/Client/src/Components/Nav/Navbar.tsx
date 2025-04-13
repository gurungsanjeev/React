

import { TiHome } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { RiGamepadLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="shadow">
        <div className="p-2.5 flex gap-20">

          <div className="logo-search  flex w-[21%]">

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
          <div className="right-components  items-center ">
            <ul className="flex  items-center gap-2">
              <li className="bg-gray-400 rounded-full p-3 "><FaFacebookMessenger /></li>
              <li className="bg-gray-400 rounded-full p-3"><FaFacebookMessenger /></li>
              <li className="bg-gray-400 rounded-full p-3"><IoNotifications /></li>
              <li className="rounded-full">
                <img src="user.jpg" alt="" className="w-[40px] h-[40px] object-cover rounded-full" />
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
