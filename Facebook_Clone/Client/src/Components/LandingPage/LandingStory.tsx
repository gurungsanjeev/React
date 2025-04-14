
const LandingStory = () => {


    const friendStory = [
        {
            profileImg: "user.jpg",
            storyImg: "user.jpg",
            name: "user1"
        },
        {
            profileImg: "user.jpg",
            storyImg: "user.jpg",
            name: "user1"
        },
        {
            profileImg: "user.jpg",
            storyImg: "user.jpg",
            name: "user1"
        },

    ]
    return (
        <>
            <div className="main-contanier flex gap-2 ">
                {/* *************************** user Story Section ************************************************** */}
                <div className="cards h-48 bg-white mt-2.5 max-h-48 rounded-lg">
                    <div className="img">
                        <img src="user.jpg" alt="user" className="h-32 w-[120px] object-cover rounded-t-lg " />
                    </div>
                    <div className="pt-3 flex flex-col justify-center items-center">

                        <i className="fa-solid fa-plus bg-blue-600 p-2 rounded-full  text-white relative border-4 border-white bottom-7" ></i>
                        <span className="relative bottom-7 font-semibold mt-2">Create Story</span>
                    </div>

                </div>


                {/* /////******************* Friends story******************************************* */}

                {
                    friendStory.map((friend, index) => (

                        <div key={index} className="cards h-48 bg-white mt-2.5 max-h-48 rounded-lg">
                            <div className="img">
                                <img src={friend.storyImg} alt={friend.name} className="h-[192px] w-[120px] object-cover rounded-lg " />
                            </div>
                            <div className="pt-3 flex flex-col justify-center items-center">

                                {/* <i className="fa-solid fa-plus bg-blue-600 p-2 rounded-full  text-white relative border-4 border-white bottom-7" ></i> */}
                                <span className="relative bottom-12 mt-2 text-white font-semibold">{friend.name}</span>
                            </div>

                        </div>


                    ))
                }
            </div>
        </>
    )
}

export default LandingStory
