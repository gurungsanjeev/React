
const LandingStory = () => {


    const friendStory = [
        {
            profileImg: "./contact-list/Elon Musk.jpg",
            storyImg: "/contact-list/Elon Musk.jpg",
            name: "Elon Musk"
        },
        {
            profileImg: "./contact-list/Carry Minati.jpg",
            storyImg: "./contact-list/Carry Minati.jpg",
            name: "Carry Minati"
        },
        {
            profileImg: "./contact-list/mr beast.jpg",
            storyImg: "/contact-list/mr beast.jpg",
            name: "Mr Beast"
        },
        

    ]
    return (
        <>
            <div className="main-contanier flex gap-3 ">
                {/* *************************** user Story Section ************************************************** */}
                <div className="cards  bg-white mt-2.5 h-52 rounded-lg">
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

                        <div key={index} className="cards h-52 bg-white mt-2.5 max-h-52 rounded-lg">
                            <div className="img">
                                <img src={friend.storyImg} alt={friend.name} className="h-[207px] w-[125px] object-cover rounded-lg opacity-70" />
                            </div>
                            <div className="profile-img">
                                <img src={friend.profileImg} alt="" className="relative h-10 w-10 rounded-full bottom-48 left-4 border-4 border-blue-700"/>
                            </div>
                            <div className="pt-3 flex flex-col justify-center items-center">

                                {/* <i className="fa-solid fa-plus bg-blue-600 p-2 rounded-full  text-white relative border-4 border-white bottom-7" ></i> */}
                                <span className="relative bottom-24 mt-2 text-white font-semibold">{friend.name}</span>
                            </div>

                        </div>


                    ))
                }
            </div>
        </>
    )
}

export default LandingStory
