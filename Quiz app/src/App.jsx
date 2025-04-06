import { useState } from 'react';
import './App.css';
import Data from './Components/data';

function App() {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [questionSet, setQuestionSet] = useState(Data[0]);
  const [answered, setAnswered] = useState(false);

  const checkAns = (option) => {
    if (selectedOption) return; // Prevent further selections

    setSelectedOption(option);

    if (questionSet.answer === option) {
      setScore(score + 1);
    }

    setAnswered(true); // Mark answer as checked
  };

  const handleNxt = () => {
    if (index < Data.length - 1) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setQuestionSet(Data[nextIndex]);
      setSelectedOption(null);
      setAnswered(false); // Reset answer check for the next question
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="main-container flex flex-col justify-center items-center h-screen bg-blue-300">
      <div className="quiz bg-blue-400 p-16 rounded-2xl w-dvh">
        <h2 className='font-semibold text-4xl'>Quiz app</h2>
        <hr />

        {isFinished ? (
          <div className='text-center mt-6'>
            <h2 className='text-3xl font-bold'>Your Score: {score} / {Data.length}</h2>
          </div>
        ) : (
          <>
            <div className='mt-4'>
              <h2 className='text-3xl font-semibold'>{index + 1}. {questionSet.question}</h2>
            </div>

            <div className='gap-2 mt-4'>
              {questionSet.options.map((option, i) => {
                let bgColor = '';
                if (answered) {
                  if (option === questionSet.answer) {
                    bgColor = 'green';
                  } else if (option === selectedOption) {
                    bgColor = 'red';
                  }
                }

                return (
                  <li
                    key={i}
                    onClick={() => checkAns(option)}
                    style={{ backgroundColor: bgColor }}
                    className={`cursor-pointer  p-2 rounded`}
                  >
                    {option}
                  </li>
                );
              })}
            </div>

            <button
              disabled={!selectedOption}
              className={`px-4 py-2 bg-blue-500 rounded mt-4 font-semibold text-white hover:bg-blue-700 ${
                !selectedOption ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleNxt}
            >
              Next
            </button>

            <p className='mt-4'>Question {index + 1} out of {Data.length}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
