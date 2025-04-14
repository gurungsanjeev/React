import { MdKeyboardArrowDown } from "react-icons/md";

import LandingAddPost from "./LandingPage/LandingAddPost";
import LandingNewsFeed from "./LandingPage/LandingNewsFeed";
import LandingStory from "./LandingPage/LandingStory";
import RightSideBar from "./LandingPage/RightSideBar";

const LandingPage = () => {
  return (
    <div className="bg-[#f2f4f7] min-h-screen">
      <div className="mx-auto flex pt-4 gap-4">

        {/* Left Sidebar */}
        <aside className="w-[23%] sticky top-0 h-[100vh] z-40 bg-[#f2f4f7] pl-4">
          <div className="flex flex-col h-full overflow-hidden">

            {/* Profile - stays fixed */}
            <div className="flex items-center gap-2 p-2 shrink-0 sticky top-0 bg-[#f2f4f7] z-10">
              <img src="user.jpg" alt="Profile" className="h-[30px] w-[30px] rounded-full" />
              <span className="font-normal">Sanjeev Gurung</span>
            </div>

            {/* Scrollable Menu */}
            <div className="overflow-y-auto mt-2 pr-2 space-y-3">
              {[
                { icon: "friends.png", label: "Friends" },
                { icon: "dashboard.png", label: "Professional Dashboard" },
                { icon: "groupp.png", label: "Groups" },
                { icon: "store.png", label: "Market Place" },
                { icon: "video-editing.png", label: "Video" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 hover:bg-gray-200 rounded-lg p-2">
                  <img src={item.icon} alt={item.label} className="h-[30px] w-[30px] rounded-full object-cover" />
                  <span className="font-semibold">{item.label}</span>
                </div>
              ))}

              <div className="flex items-center gap-2 hover:bg-gray-200 rounded-lg p-2">
                <MdKeyboardArrowDown className="bg-gray-300 h-[25px] w-[30px] rounded-full" />
                <span>See More</span>
              </div>
            </div>

          </div>
        </aside>


        {/* Main Content */}
        <main className="max-w-[54%] space-y-4 mx-[120px]">
          <LandingAddPost />
          <LandingStory />
          <LandingNewsFeed />
        </main>

        {/* Right Sidebar */}
        
        <RightSideBar/>
      </div>
    </div>
  );
};

export default LandingPage;
