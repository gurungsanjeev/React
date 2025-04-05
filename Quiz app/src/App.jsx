import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Components/data'

function App() {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionSet, setQuestionSet] = useState(Data[index]);


  const checkAns = (e, ans) => {
    if (selectedOption) return; // Prevent further selections once an option is selected

    setSelectedOption(ans); // Mark the option as selected
    if (questionSet.answer == ans) {
      setScore(score + 1);
      e.target.classList.add("correct")
     
    }
    else {
      e.target.classList.add("wrong")
    }
   
  }


  const handleNxt=()=>{
    if (index < Data.length -1){
      setSelectedOption(null);
      setIndex(index+1);
      setQuestionSet(Data[index+1]);
      setSelectedOption(null);
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


            {/* /// displaying the number of list using map function */}
            {questionSet.options.map((options, index) => (
              <li key={index} onClick={(e) => { checkAns(e, options) }}>{options}</li>
            ))}
          </div>



          <button 
          className='px-4 py-2
           bg-blue-500
            rounded mt-4
             font-semibold
              text-white
               hover:bg-blue-700'
               onClick={handleNxt}>Next</button>
          <p className='mt-4'>question {index+1} out {Data.length}</p>
        </div>
      </div>


    </>
  )
}

export default App
