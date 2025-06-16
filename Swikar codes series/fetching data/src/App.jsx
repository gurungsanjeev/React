import { useState } from 'react'
import axios from 'axios';
import './App.css'
import { getUserData, createUser } from './services/user';

function App() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [showUser, setShowUser] = useState([])
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)



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

    try {

      const a = await getUserData();
      console.log({ a });
      setShowUser(a);
    } catch (e) {
      console.log("error in fetching data from getUserData: " + e);
    }
  }


  async function handleSubmit(e) {
    e.preventDefault();
  const formData = {name, email, address};
  setSubmitting(true)
  await createUser(formData)
  setSubmitting(false)
  setName("")
  setEmail("")
  setAddress("")
  }
console.log({submitting})
  return (
    <>
      <h1>Calling API</h1>
      <button onClick={handleGetPost}>
        {display ? "Hide Posts" : "Show Posts"}
      </button>

      <h1>listing the user name</h1>
      {showUser.map((res, index) => (
        <li key={index}>{res?.name}</li>
      ))}
      {/* Only show posts when display is true */}
      {display && data.map((res, index) => (
        <p key={index}>{res.title}</p>
      ))}


      <form action="">
        <div><input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} /> My Name is : {name}</div>
        <div><input type="text" value={address} placeholder="address" onChange={(e) => setAddress(e.target.value)} /> My address is : {address}</div>
        <div><input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />My Email is : {email}</div>
        <button type="submit" onClick={handleSubmit}>{submitting?"Submiting.....":"submit"}</button>
      </form>
    </>
  );
}

export default App;
