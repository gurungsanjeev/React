import { useState } from 'react'
import './App.css'

function App() {

  const allQuotes = [
    {
      quotes: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quotes: "When something is important enough, you do it even if the odds are not in your favor.",
      author: "Elon Musk"
    },
    {
      quotes: "Your love makes me strong, your hate makes me unstoppable.",
      author: "Cristiano Ronaldo"
    },
    {
      quotes: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
      author: "Albert Einstein"
    },
    {
      quotes: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quotes: "It is never too late to be what you might have been.",
      author: "George Eliot"
    },
    {
      quotes: "If you want to go fast, go alone. If you want to go far, go together.",
      author: "African Proverb"
    },
    {
      quotes: "Don’t be trapped in someone else’s dream.",
      author: "Steve Jobs"
    },
    {
      quotes: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quotes: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  ]

  const [quotes, setQuotes] = useState(() => {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    return (allQuotes[randomIndex]);
  })

  const handleNxt = () => {

    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    setQuotes(allQuotes[randomIndex]);
  }

  return (
    <>
      <div className="main-container flex justify-center flex-col items-center h-screen bg-blue-200">
        <h1 className='text-4xl font-semibold'>Random Quotes Generator</h1>
        <div className=' inner-container bg-white w-[80%] max-w-xl p-8 rounded-lg  mt-8 shadow-lg flex flex-col items-center'>
          <div className="quotes mb-4" aria-live="polite">

            <h1 className='text-gray-800 text-xl text-center font-comic'>{quotes.quotes}</h1>
          </div>
          <hr className='w-full border-gray-300 my-2' />
          <div className="auther-name mt-2">
            <h3 className='text-purple-500 font-medium text-lg'>- {quotes.author}</h3>
          </div>
          <div className='float-right flex mt-8'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg float-right hover:bg-blue-700' onClick={handleNxt}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
