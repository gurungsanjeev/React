

const LandingAddPost = () => {
  return (
    <>
      <div className="main-container bg-white  p-4 rounded-lg ">
        <div className="status  flex gap-2">
          <img src="user.jpg" alt="user" className="h-[40px] w-[40px] rounded-full" />
          <input type="text" className=" bg-[#f0f2f5] w-full rounded-full pl-4" placeholder="What's on your mind, User?" />
        </div>
        <hr  className="mt-4 bg-[#f0f2f5]"/>
        <div className="social-connections flex gap-2 mt-3">
          <div className="flex items-center gap-2  py-2 w-[165px] rounded-lg justify-center hover:bg-[#f0f2f5]">
            <img src="Video-player.png" alt="" className="h-[35px] w-[35px]" />
            <h3 className="font-semibold text-sm">Live Video</h3>
          </div>
          <div className="flex items-center gap-2  py-2 w-[165px] rounded-lg justify-center hover:bg-[#f0f2f5]">
            <img src="picture.png" alt="picture" className="h-[35px] w-[35px]" />
            <h3 className="font-semibold text-sm">Photo/Video</h3>
          </div>
          <div className="flex item-center items-center gap-2 py-2  w-[165px] justify-center rounded-lg hover:bg-[#f0f2f5]" >
            <img src="reel.png" alt="reel" className="h-[35px] w-[35px]" />
            <h3 className="font-semibold text-sm">Reels</h3>
          </div>
        </div>

      </div>

    </>
  )
}

export default LandingAddPost
