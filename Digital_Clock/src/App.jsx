import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState( new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [])
  


  return (
    <>
      <div className="container bg-gray-600 max-w-screen h-screen flex justify-center items-center">
        <div className="inner-container bg-gray-700 text-white p-4 rounded-sm font-semibold text-4xl">
        
          {time}
        </div>

      </div>

    </>
  )
}

export default App
