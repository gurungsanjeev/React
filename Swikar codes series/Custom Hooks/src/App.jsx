import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./Components/Cards";

async function getUsers() {
  try {
    const responseData = await axios.get(
      "https://684ed963f0c9c9848d294d27.mockapi.io/usersData"
    );
    console.log(responseData.data);
    return responseData;
  } catch (error) {
    console.log("error" + error);
  }
}
// // this is the Distructure process ie.
// function Card({ nme, email, id, address }) {
//   return (
//     <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
//       <p>ID: {id}</p>
//       <h3>Name : {nme}</h3>
//       <p> Email : {email}</p>
//       <p>Address: {address}</p>
//       <hr />
//     </div>
//   );
// }

/// this is the not distructure process
// function Card(props) {
//   return (<div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>

//     <p>ID: {props.id}</p>
//     <h3 >
//       Name : {props.nme}</h3>
//      <p> Email : {props.email}</p>
//      <p>Address: {props.address}</p>
//      <hr />
//   </div>
//   )
// }

//// creating the costume hooks
function useDebounce(input, delay) {
  /// creating the new state for the debouncing
  const [deValue, setDeValue] = useState("")

  /// using for debouncing 
  useEffect(() => {
    const timer = setTimeout(() => {
      setDeValue(input);
    }, delay);
    // cleaning function
    return () => {
      clearTimeout(timer)
    }
  }, [input])
  return deValue
}





function App() {
  const [users, setUsers] = useState([]);
  const [presentCounter, setPresentCounter] = useState(0)
  const [input, setInput] = useState("")


  async function handleGetUsers() {
    const ResponsedData = await getUsers();
    console.log({ ResponsedData });
    setUsers(ResponsedData.data);
  }


  function handleChange(e) {
    setInput(e.target.value);
  }
/// costume hook
  const debounceValue = useDebounce(input, 600)


  return (


    <>

      <input type="text" placeholder="search" onChange={handleChange} value={input} />
      <div>input Value: {input}</div>

      <div>Devalue:  {debounceValue}</div>
      <h2>Hello counter: {presentCounter}</h2>
      <button onClick={handleGetUsers}>Get users</button>
      {users.map((res) => (
        <Cards
          key={res.id}
          nme={res.name}
          id={res.id}
          email={res.email}
          address={res.address}
          handleCounter={setPresentCounter}
        />
      ))}
    </>
  );
}

export default App;
