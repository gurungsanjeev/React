

import { TiHome } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
      <nav className="bg-amber-300 ">
        <div className="p-4">

          <div className="logo-search  flex w-[23%]">

            <img src="facebook-logo.png" alt="" className="h-10" />
            <CiSearch className="h-[43px] w-[23px] absolute left-[75px]" />
            <input type="search" 
            className="bg-[#f0f2f5]
             ml-2
             rounded-4xl
             pl-12
             w-full"

             placeholder="Search Facebook" />
          </div>
          <div className="list-items">
            <ul>
              <li><TiHome /></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="right-components">

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
