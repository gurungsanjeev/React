import { useState } from 'react'

import './App.css'

function App() {
  const [display, setDisplay] = useState("")
  
  const handleNum=(input)=>{
    setDisplay((prev)=> prev + input);
  }
   const handleCal=()=>{
    setDisplay(eval(display) )
  }
  const handleClear=()=>{
    setDisplay("")
  }
  const handleUndo=()=>{
    setDisplay((prev) => prev.slice(0, -1)); // Corrected function
  }
  return (
    <>
      <div className="main-container flex-col">

        <div className="calculator">
    
          <span>

          <input type="display"  
          readOnly 
          value={display}
        
          id='display'/>
          </span>
          <hr className='my-3'/>
          <div className="keys">
            {/* {
              [1,2,3,4,5,6,7,8,9,0].map((num)=>(
                <button>{num}</button>
              ))
            } */}
          
          <button onClick={handleClear} className='clear-btn'>AC</button>
         
          <button onClick={handleUndo} className='operator-btn'  >⌫</button>
          <button onClick={()=> handleNum("*")} className='operator-btn'  >*</button>
          <button onClick={()=> handleNum("%")} className='operator-btn'  >%</button>
         
          
          <button onClick={()=> handleNum("9")}>9</button>
          <button onClick={()=> handleNum("8")}>8</button>
          <button onClick={()=> handleNum("7")}>7</button>
          <button onClick={()=> handleNum("+")} className='operator-btn'>+</button>
          
          <button onClick={()=> handleNum("6")} >6</button>
          <button onClick={()=> handleNum("5")}>5</button>
          <button onClick={()=> handleNum("4")}>4</button>
          <button onClick={()=> handleNum("-")} className='operator-btn'>-</button>
          
          <button onClick={()=> handleNum("3")} >3</button>
          <button onClick={()=> handleNum("2")}>2</button>
          <button onClick={()=> handleNum("1")}>1</button>
          <button onClick={()=> handleNum("/")} className='operator-btn'>/</button>

          <button onClick={()=> handleNum(".")} >.</button>
          <button onClick={()=> handleNum("0")}>0</button>
          <button onClick={()=> handleNum("00")}>00</button>
          <button onClick={handleCal} className='operator-btn'>=</button>
          
            
          </div>
        </div>
      
      </div>
    </>
  )
}

export default App
