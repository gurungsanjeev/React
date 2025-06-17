import React from "react";
import "./Cards.css";
import { useState } from "react";

const Cards = ({ nme, email, id, address, handleCounter }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Hello counter</h2>
      <div className="card">
        <p>ID: {id}</p>
        <h3>Name : {nme}</h3>
        <p> Email : {email}</p>
        <p>Address: {address}</p>
        <p>Count: {count}</p>
        <button onClick={() =>{ 
          setCount(count + 1)
          handleCounter(count + 1);
          }}>Increase counter</button>
        <hr />
      </div>
    </>
  );
};

export default Cards;
