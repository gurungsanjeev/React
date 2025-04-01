import { useState } from "react";

const BankCounter = () => {
  const [count, setCount] = useState(1);  // Global token count
  const [counter1, setCounter1] = useState(null);
  const [counter2, setCounter2] = useState(null);
  const [counter3, setCounter3] = useState(null);

 const handleCounter1=()=>{
setCounter1(count);
setCount(prev => prev + 1);
}
const handleCounter2=()=>{
  setCounter2(count);
  setCount(prev => prev + 1);
  
}
const handleCounter3=()=>{
  setCounter3(count);
  setCount(prev => prev + 1);

 }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h2 className="text-4xl font-bold mb-10">🏦 Bank Counter System</h2>
     

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Counter 1 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl text-center w-64">
          <h3 className="text-xl font-semibold mb-4">Counter 1</h3>
          <p className="text-lg font-bold mb-2">
            {counter1 ? `Serving Token ${counter1}` : "Waiting..."}
          </p>
          <button 
            onClick={handleCounter1}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all">
            Serve Next
          </button>
        </div>

        {/* Counter 2 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl text-center w-64">
          <h3 className="text-xl font-semibold mb-4">Counter 2</h3>
          <p className="text-lg font-bold mb-2">
            {counter2 ? `Serving Token ${counter2}` : "Waiting..."}
          </p>
          <button 
            onClick={handleCounter2}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all">
            Serve Next
          </button>
        </div>

        {/* Counter 3 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl text-center w-64">
          <h3 className="text-xl font-semibold mb-4">Counter 3</h3>
          <p className="text-lg font-bold mb-2">
            {counter3 ? `Serving Token ${counter3}` : "Waiting..."}
          </p>
          <button 
            onClick={handleCounter3}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all">
            Serve Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankCounter;
