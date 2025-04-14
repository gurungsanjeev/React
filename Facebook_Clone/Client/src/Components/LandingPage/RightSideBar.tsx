import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

const RightSideBar = () => {
  const contactList = [
    {
      profileImg: "./contact-list/Elon Musk.jpg",
      name: "Elon Musk",
      activeStatus: "true",
    },
    {
      profileImg: "./contact-list/Carry Minati.jpg",
      name: "Carry Minati",
      activeStatus: "true",
    },
    {
      profileImg: "./contact-list/steve jobs.jpg",
      name: "Steve jobs",
      activeStatus: "true",
    },
    {
      profileImg: "./contact-list/ronaldo.jpg",
      name: "Ronaldo",
      activeStatus: "true",
    },
    {
      profileImg: "./contact-list/messi.jpg",
      name: "Messi",
      activeStatus: "true",
    },
    {
      profileImg: "./contact-list/neymar.jpg",
      name: "Neymar",
      activeStatus: "true",
    },
    {
      profileImg: "./contact-list/user1.jpg",
      name: "Harry",
      activeStatus: "false",
    },
    {
      profileImg: "./contact-list/user2.jpg",
      name: "Walker",
      activeStatus: "false",
    },
  ];

  return (
    <aside className="w-[23%] sticky top-0 h-[100vh] z-40  pr-4">
      <div className=" p-4 rounded-lg ">
        <div className="contacts flex justify-between">
          <h1 className="font-semibold">Contacts</h1>
          <div className="flex justify-between gap-4">
            <CiSearch className="text-2xl" />
            <BsThreeDots className="text-2xl" />
          </div>
        </div>

        {contactList.map((contact, index) => (
          <div
            key={index}
            className="contact-list flex items-center mt-2 hover:bg-[#f0f2f5] px-4 py-2 rounded-2xl"
          >
            <div className="relative">
              <img
                src={contact.profileImg}
                alt={contact.name}
                className="h-8 w-8 rounded-full object-fill"
              />
              {contact.activeStatus === "true" && (
                <img
                  src="online.png"
                  alt=""
                  className="h-3 w-3 absolute bottom-0 right-0 border-2 border-white rounded-full"
                />
              )}
            </div>
            <h1 className="font-semibold ml-2">{contact.name}</h1>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSideBar;
