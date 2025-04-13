import { MdKeyboardArrowDown } from "react-icons/md";

const LandingPage = () => {
  return (
    <>
      <div className="main-container  bg-[#f2f4f7]">
        <div className="flex pt-4">

          <div className="aside-left w-[23%]">
            <aside className="pl-4">
              <div className="flex gap-2 items-center">

                <img src="user.jpg" alt="" className="h-[30px] w-[30px] rounded-full" /><span className="font-normal">Sanjeev Gurung</span>
              </div>
              <div className="flex gap-2 items-center mt-3 hover:bg-gray-300 rounded-lg py-2">
                <img src="friends.png" alt="" className="h-[30px] w-[30px] rounded-full object-cover" /><span className="font-semibold">Freinds</span>
              </div>
              <div className="flex gap-2 items-center mt-3 hover:bg-gray-300 rounded-lg py-2">
                <img src="dashboard.png" alt="" className="h-[30px] w-[30px] rounded-full" /><span className="font-semibold">Professional Dashboard</span>
              </div>
              <div className="flex gap-2 items-center mt-3 hover:bg-gray-300 rounded-lg py-2">
                <img src="groupp.png" alt="" className="h-[30px] w-[30px] rounded-full" /><span className="font-semibold">Groups</span>
              </div>
              <div className="flex gap-2 items-center mt-3 hover:bg-gray-300 rounded-lg py-2">
                <img src="store.png" alt="" className="h-[30px] w-[30px] rounded-full" /><span className="font-semibold">Market Place</span>
              </div>
              <div className="flex gap-2 items-center mt-3 hover:bg-gray-300 rounded-lg py-2">
                <img src="video-editing.png" alt="" className="h-[30px] w-[30px] rounded-full" /><span className="font-semibold">Video</span>
              </div>
              <div className="flex gap-2 items-center mt-3 hover:bg-gray-300 rounded-lg py-2">
                <MdKeyboardArrowDown className="bg-gray-300 h-[25px] w-[30px] rounded-full" /> <span>See More</span>
              </div>

            </aside>
          </div>
          <div className="container-body w-[54%]">

            asdfsadf
          </div>
          <div className="aside-right w-[23%] bg-amber-300">
            <aside>
              asdfdsaf
            </aside>
          </div>

        </div>
      </div>
    </>
  )
}

export default LandingPage
