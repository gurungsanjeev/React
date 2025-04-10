import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0) /// time in milliseconds
  const [isRunning, setIsRunning] = useState(false)



  useEffect(() => {
    let timer;
    if(isRunning){
      timer = setInterval(()=>{
        setTime(prev => prev + 10)
      },10);

    }else{
      clearInterval(timer);
    }
    return ()=> clearInterval(timer);
  }, [isRunning])

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = `0${Math.floor(seconds / 60)}`.slice(-2);
    return `${minutes}:${getSeconds}:${getMilliseconds}`;
  };
  
  

  return (
    <>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <h1 className='text-4xl'>Stop Watch</h1>
        <span className='text-3xl mt-4'>{formatTime(time)}</span>
        <div className="button mt-6">

          {!isRunning ? (
            <button className='bg-indigo-500 px-6 py-2 rounded-lg hover:bg-indigo-800'
            onClick={()=>setIsRunning(true)}>Start</button>) :
            (<button className='bg-amber-400 px-6 py-2 rounded-lg hover:bg-amber-500'
            onClick={()=>setIsRunning(false)}>Stop</button>)
          }
          <button
            className='bg-red-400 ml-6 px-6 py-2 rounded-lg hover:bg-red-600'
            onClick={()=>{setTime(0);
              setIsRunning(false);}
            }>Reset</button>
        </div>
      </div>

    </>
  )
}

export default App
