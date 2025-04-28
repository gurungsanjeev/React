import { useEffect, useState } from "react";
import axios from "axios";

const InnerNavBar = () => {
  const [username, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from local storage

    if (token) {
      axios.get('http://127.0.0.1:3001/navbar', {
        headers: {
          Authorization: token // Send token in Authorization header
        }
      })
      .then(response => {
        setUserName(response.data.username);
      })
      .catch(err => console.log(err));
    }
  }, []);

  return (
    <>
      <nav className="bg-indigo-500">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo section */}
          <div className="logo">
            <h1 className="text-white text-2xl font-bold"> Resume Builder</h1>
          </div>

          {/* Profile section */}
          <div className="profile-section flex items-center gap-2">
            <img src="user.jpg" alt="user" className="h-12 w-12 rounded-full" />
            <p className="text-white font-semibold">{username}</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default InnerNavBar;
