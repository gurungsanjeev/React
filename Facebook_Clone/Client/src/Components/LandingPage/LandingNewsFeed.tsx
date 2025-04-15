import { useState } from "react";
import { IoEarth } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";

const LandingNewsFeed = () => {
    const news = [
        {
            name: "Arjit singh",
            profileImg: "/contact-list/Arjit singh.jpg",
            uploadedImg: "/contact-list/Arjit singh.jpg",
            caption: "If you can dream it, you can achieve it.",
            initialLikes: 890,
        }, 
        {
            name: "Elon Musk",
            profileImg: "/contact-list/Elon Musk.jpg",
            uploadedImg: "user1-img.jpg",
            caption: "Persistence is very important. You should not give up unless you are forced to give up.",
            initialLikes: 120,
        },
         {
            name: "Marry",
            profileImg: "user1.jpg",
            uploadedImg: "user1-img.jpg",
            caption: "Technology isn't replacing humans; it's enhancing the way we dream.",
            initialLikes: 720,
        },
        {
            name: "Carry Minati",
            profileImg: "/contact-list/Carry Minati.jpg",
            uploadedImg: "/contact-list/Carry Minati.jpg",
            caption: "In a world full of signals and screens, creativity is still the most powerful device.",
            initialLikes: 975,
        },
        {
            name: "Steve Jobs",
            profileImg: "/contact-list/steve jobs.jpg",
            caption: "Innovation starts where curiosity meets code",
            initialLikes: 760,
        },
    ];

    return (
        <>
            {news.map((newsfeed, index) => {
                const [clicked, setClicked] = useState(false);
                const [likeCount, setLikeCount] = useState(newsfeed.initialLikes);

                const handleLike = () => {
                    setClicked(!clicked);
                    setLikeCount(prev => (clicked ? prev - 1 : prev + 1));
                };

                return (
                    <div key={index} className="main-container bg-white rounded-lg mt-4 shadow">
                        <div className="newsCard max-w-[578px]">
                            <div className="card-header p-4">
                                <div className="uppersection flex justify-between gap-2">
                                    <div className="flex">
                                        <img src={newsfeed.profileImg} alt="user" className="h-11 w-11 rounded-full object-cover" />
                                        <div className="ml-3">
                                            <h3 className="font-semibold">{newsfeed.name}</h3>
                                            <span className="flex items-center text-[#65686c] text-sm">4m · <IoEarth /></span>
                                        </div>
                                    </div>
                                    <div className="options flex items-center gap-2 ">
                                        <BsThreeDots className="text-2xl" />
                                        <RxCross2 className="text-2xl" />
                                    </div>
                                </div>
                                <div className="captions mt-2">
                                    <h1 className="text-lg">{newsfeed.caption}</h1>
                                </div>
                            </div>
                            {/* /// using logical AND */}
                            {newsfeed.uploadedImg && (
                                <div className="image-section">
                                    <img src={newsfeed.uploadedImg} alt="uploaded" className="w-auto" />
                                </div>
                            )}

                            <div className="emoji-section flex ml-4 mt-4">
                                <img src="./emoji/care-emoji.png" alt="care" className="h-6 w-6" />
                                <img src="./emoji/like-emoji.png" alt="like" className="h-6 w-6" />
                                <img src="./emoji/love-emoji.png" alt="love" className="h-6 w-6" />
                                <span className="ml-2 text-sm">
                                    {clicked ? `You and other ${likeCount - 1}` : `${likeCount}`}
                                </span>
                            </div>

                            <hr className="mt-1" />

                            <div className="reaction-section flex gap-2 mx-4 justify-between mt-2">
                                {/* Like Button */}
                                <button
                                    onClick={handleLike}
                                    className="flex gap-1 items-center px-12 py-2 mb-1 text-[#65686c] rounded-lg hover:bg-gray-400"
                                >
                                    {clicked ? (
                                        <img src="./emoji/full-like.png" alt="liked" className="h-6 w-6" />
                                    ) : (
                                        <BiLike className="h-7 w-6" />
                                    )}
                                    <span className={`text-lg font-semibold ${clicked ? "text-blue-600" : "text-[#65686c]"}`}>
                                        {clicked ? "Liked" : "Like"}
                                    </span>
                                </button>

                                {/* Comment Button */}
                                <button className="flex gap-1 items-center px-12 py-2 mb-1 text-[#65686c] rounded-lg hover:bg-gray-400">
                                    <FaRegCommentAlt className="h-7 w-6" />
                                    <span className="text-lg font-semibold">Comment</span>
                                </button>

                                {/* Share Button */}
                                <button className="flex gap-1 items-center px-12 py-2 mb-1 text-[#65686c] rounded-lg hover:bg-gray-400">
                                    <PiShareFatLight className="h-7 w-6" />
                                    <span className="text-lg font-semibold">Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default LandingNewsFeed;
