import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useReducer } from 'react'
import './App.css'

function App() {
  
  const reducer=(state, action)=>{ /// it takees two parameter state and action
if(action.type==="INCREMENT"){
return  state = state + 1;
}
if(action.type==="DECREMENT"){
  return state = state - 1;
}
  }
  const [count, dispatch] = useReducer(reducer, 0)// 0 is an initial function
  //reducer is an function
  console.log(useReducer(reducer))
  

  return (
    <>
   <div> {count}</div>
    <button onClick={()=> dispatch({type:"INCREMENT"})} >Increment</button> 
    {/* /// passing INCREMENT object */}
    <button onClick={()=> dispatch({type:"DECREMENT"})}>Decrement</button>
    {/* ////// passing DECREMENT OBJECT  */}
      
    </>
  )
}

export default App
