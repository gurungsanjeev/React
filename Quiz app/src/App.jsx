import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Components/data'

function App() {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0)
  const [questionSet, setQuestionSet] = useState(Data[index]);


  const checkAns = (e, ans) => {
    if (questionSet.answer == ans) {
e.target.classList.add("correct")
    }
    else{
      e.target.classList.add("wrong")
    }
  }


  return (
    <>
      <div className="main-container flex flex-col justify-center items-center h-screen bg-blue-300 ">


        <div className="quiz bg-blue-400 p-16 rounded-2xl w-dvh">
          <h2 className='font-semibold text-4xl'>Quiz app</h2>
          <hr />
          <div className='mt-4'>

            <h2 className='text-3xl font-semibold'>{index + 1}. {questionSet.question} </h2>
          </div>
          <div className='gap-2 mt-4'>

            {/* <li className='list-none bg-white mt-3 rounded-sm p-2'>Charles Babbage</li>
          <li className='list-none bg-white mt-3 rounded-sm p-2'>Lady Augusta</li>
          <li className='list-none bg-white mt-3 rounded-sm p-2'>Antio</li>
          <li className='list-none bg-white mt-3 rounded-sm p-2'>Harry</li> */}


            {questionSet.options.map((options, index) => (
              <li onClick={(e)=>{checkAns(e)}}>{options}</li>
            ))}
          </div>



          <button className='px-4 py-2 bg-blue-500 rounded mt-4 font-semibold text-white hover:bg-blue-700'>Next</button>
          <p className='mt-4'>question 1 out 5</p>
        </div>
      </div>


    </>
  )
}

export default App
