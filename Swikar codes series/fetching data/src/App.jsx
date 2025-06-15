import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);

  async function handleGetPost() {
    if (display) {
      setDisplay(false); // hide posts
      return;
    }

    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setDisplay(true); // show posts
    } catch (error) {
      console.log("Error on fetching the data: " + error);
    }
  }

  return (
    <>
      <h1>Calling API</h1>
      <button onClick={handleGetPost}>
        {display ? "Hide Posts" : "Show Posts"}
      </button>

      {/* Only show posts when display is true */}
      {display && data.map((res, index) => (
        <p key={index}>{res.title}</p>
      ))}
    </>
  );
}

export default App;
