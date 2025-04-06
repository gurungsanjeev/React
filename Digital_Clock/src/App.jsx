import { useState } from 'react'

import { useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
 
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [])



  return (
    <>
          
      <div className="container bg-gray-600 max-w-screen h-screen flex flex-col justify-center items-center">
        <h1 className='text-3xl font-semibold text-white'>Digital Clock</h1>
        <div className="inner-container bg-gray-700 text-white p-4 rounded-sm font-semibold text-4xl mt-4">
          {time}
        </div>

      </div>

    </>
  )
}

export default App
