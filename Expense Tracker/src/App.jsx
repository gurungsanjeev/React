import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { 
  getLocalStorageBalanceData,
  getLocalStorageExpensesData,
  getLocalStorageIncomeData, 
  setLocalStorageBalanceData,
  setLocalStorageExpensesData, 
  setLocalStorageIncomeData } from "./LocalStorage"



function App() {
  const [income, setIncome] = useState()
  const [expenses, setExpenses] = useState()

  const [balance, setBalance] = useState(() => getLocalStorageBalanceData())



  const [totalIncome, setTotalIncome] = useState(() => getLocalStorageIncomeData())
  const [totalExpenses, setTotalExpenses] = useState(()=> getLocalStorageExpensesData())



  const handleAdd = () => {
    const incomeNum = parseFloat(income) || 0;
    const expensesNum = parseFloat(expenses) || 0;
    const actualBalance = parseFloat(incomeNum - expensesNum);
    // updating the income
    setTotalIncome((prev) => prev + incomeNum);
    // updating the expenses
    setTotalExpenses((prev) => prev + expensesNum);
    // handling the expenses
    setBalance((prev) => {
      const newBalance = parseFloat(prev) + actualBalance;
      setLocalStorageBalanceData(newBalance);
      return newBalance
    });
    setLocalStorageIncomeData(incomeNum);
    setIncome("");
    setExpenses("");
  }


  /// adding the data into the local storage
  // ExpensesTracker name of localStorage

  // localStorage.setItem(prevBalance, JSON.stringify(balance))
  setLocalStorageBalanceData(balance);
  setLocalStorageIncomeData(totalIncome);
  setLocalStorageExpensesData(totalExpenses);
  return (
    <>



      <div className="main-container  bg-gray-600 h-screen flex justify-center">
        <div className='flex flex-col   border-2 border-white py-8 h-[100%] '>

          <h1 className='items-center flex justify-center text-2xl font-semibold py-4 text-white'>Expenses Tracker</h1>
          <hr className='bg-white' />
          <div className="inner-container mt-6">
            <h1 className='pl-2 font-semibold text-xl text-white'>Balance amount: {balance}</h1>
            <div className="amount-details flex  gap-4">
              <div className="income bg-green-400 m-2 p-6 rounded-lg">
                <h1 className='text-lg text-white font-semibold'>Your total income : {totalIncome}</h1>
              </div>
              <div className="expenses bg-red-400 m-2 p-6 rounded-lg">
                <h1 className='text-lg text-white font-semibold'>Your total expenses : {totalExpenses}</h1>
              </div>

            </div>
            <div className="input p-2">
              <div className='mt-4'>
                <h2 className='text-white mb-2'>Your Income</h2>
                <input type="number" className='bg-white w-[100%] rounded-sm py-2 pl-2' min={0}
                  placeholder='Enter your income '
                  value={income}
                  onChange={(e) => setIncome(e.target.value)} />
              </div>
              <div className='mt-4'>
                <h2 className='text-white mb-2'>Your Expenses</h2>
                <input type="number" className='bg-white w-[100%] rounded-sm py-2 pl-2' min={0}
                  placeholder='Enter your expenses'

                  value={expenses}
                  onChange={(e) => setExpenses(e.target.value)} />
              </div>
              <div className='mt-4 '>
                <button
                  className='px-4
                  py-2 w-[100%] 
                  text-xl text-white
                   font-semibold
                    rounded-lg
                     bg-green-500'
                  onClick={handleAdd}>ADD</button>
              </div>
              <div>
                
              <button
                className='px-4
                  py-2 w-[100%] 
                  text-xl text-white
                   font-semibold
                    rounded-lg'
                onClick={() => {
                  setIncome(0);
                  setExpenses(0);
                  setBalance(0);
                  setTotalIncome(0);
                  setTotalExpenses(0);
                  setTransactions([]);
                  localStorage.clear();
                   // or remove individual keys
                }
              }
                >
                Reset All
              </button>

                </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
