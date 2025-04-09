import { useState } from 'react';
import './App.css';

function App() {
  // State for each currency value
  const [usa, setUsa] = useState(1);
  const [nep, setNep] = useState(132);
  const [ind, setInd] = useState(83);
  const [jap, setJap] = useState(151);
  const [kor, setKor] = useState(1350);

  // Conversion rates
  const conversionRates = {
    usdToNpr: 132,
    usdToInr: 83,
    usdToJpy: 151,
    usdToKor: 1350,
  };

  // Handle change in USD (USA currency)
  const handleUsaChange = (value) => {
    setUsa(value);
    setNep(value * conversionRates.usdToNpr);
    setInd(value * conversionRates.usdToInr);
    setJap(value * conversionRates.usdToJpy);
    setKor(value * conversionRates.usdToKor);
  };

  // Handle change in Nepalese Rupees
  const handleNepChange = (value) => {
    setNep(value);
    setUsa(value / conversionRates.usdToNpr);
    setInd((value / conversionRates.usdToNpr) * conversionRates.usdToInr);
    setJap((value / conversionRates.usdToNpr) * conversionRates.usdToJpy);
    setKor((value / conversionRates.usdToNpr) * conversionRates.usdToKor);
  };

  // Handle change in Indian Rupees
  const handleIndChange = (value) => {
    setInd(value);
    setUsa(value / conversionRates.usdToInr);
    setNep((value / conversionRates.usdToInr) * conversionRates.usdToNpr);
    setJap((value / conversionRates.usdToInr) * conversionRates.usdToJpy);
    setKor((value / conversionRates.usdToInr) * conversionRates.usdToKor);
  };

  // Handle change in Japanese Yen
  const handleJapChange = (value) => {
    setJap(value);
    setUsa(value / conversionRates.usdToJpy);
    setNep((value / conversionRates.usdToJpy) * conversionRates.usdToNpr);
    setInd((value / conversionRates.usdToJpy) * conversionRates.usdToInr);
    setKor((value / conversionRates.usdToJpy) * conversionRates.usdToKor);
  };

  // Handle change in Korean Won
  const handleKorChange = (value) => {
    setKor(value);
    setUsa(value / conversionRates.usdToKor);
    setNep((value / conversionRates.usdToKor) * conversionRates.usdToNpr);
    setInd((value / conversionRates.usdToKor) * conversionRates.usdToInr);
    setJap((value / conversionRates.usdToKor) * conversionRates.usdToJpy);
  };

  return (
    <div className="main-container h-screen flex justify-center flex-col items-center">
      <div className="inner-container bg-gray-400 w-[100%] p-10">
      
        <div>
<h2 className='text-3xl font-semibold'>Exchange Rate</h2>
          {/* USA Input */}
          <div className="flex items-center gap-3 mb-4">
            <img src="usa.jpg" alt="" className="w-[10%]" />
            <h2 className="text-white">United States</h2>
            <input
              type="number"
              value={usa}
              onChange={(e) => handleUsaChange(e.target.value)}
              className="bg-white px-2"
            />
          </div>

          {/* Nepal Input */}
          <div className="flex items-center gap-3 mb-4">
            <img src="Nepal.jpg" alt="" className="w-[10%]" />
            <h2 className="text-white">Nepal</h2>
            <input
              type="number"
              value={nep}
              onChange={(e) => handleNepChange(e.target.value)}
              className="bg-white px-2"
            />
          </div>

          {/* India Input */}
          <div className="flex items-center gap-3 mb-4">
            <img src="india.jpg" alt="" className="w-[10%]" />
            <h2 className="text-white">India</h2>
            <input
              type="number"
              value={ind}
              onChange={(e) => handleIndChange(e.target.value)}
              className="bg-white px-2"
            />
          </div>

          {/* Japan Input */}
          <div className="flex items-center gap-3 mb-4">
            <img src="japan.jpg" alt="" className="w-[10%]" />
            <h2 className="text-white">Japan</h2>
            <input
              type="number"
              value={jap}
              onChange={(e) => handleJapChange(e.target.value)}
              className="bg-white px-2"
            />
          </div>

          {/* Korea Input */}
          <div className="flex items-center gap-3">
            <img src="Korea.jpg" alt="" className="w-[10%]" />
            <h2 className="text-white">Korea</h2>
            <input
              type="number"
              value={kor}
              onChange={(e) => handleKorChange(e.target.value)}
              className="bg-white px-2"
            />
          </div>
        </div>
      
      
      </div>
      
    </div>
  );
}

export default App;
