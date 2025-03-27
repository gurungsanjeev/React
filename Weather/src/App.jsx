import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cloudyWeather from '/cloudy-weather.png'
import humidity from '/humidity-logo.png'
import wind from '/wind-logo.png'


function App() {
  const [weatherData, setWeatherData] = useState()
  const [cityName, setCityName] = useState("kathmandu")

  
  const search= async(city)=>{
    /// Api id from the openweather app
    const apiId= "e408d115e7071379876b950c4bcf9914"
   
    
      try{

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiId}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location:data.name
        })
      }
      catch(err){
        alert("Error", err)
      }
    
    
  }
  useEffect(() => {
   search(cityName)
  
  }, [])

  const handleSearch=()=>{
  if(cityName.trim()!== ""){
    search(cityName)
  }
  }


  

  return (
    <>
      <div className="main-container bg-amber-200 w-screen h-screen flex justify-center items-center">
        <div className="weather-app bg-indigo-500 w-[40%] h-[90%] m-4 rounded-2xl">
          <h1 className='text-center font-semibold text-3xl mt-3 text-white'>Weather App</h1>
          <div className='mt-6 flex flex-col justify-center items-center'>
            <div className='flex'>
            <input type="text" 
            className='bg-white px-4 py-2 w-[100%] rounded-lg' placeholder='Enter city Name'
            value={cityName}
            onChange={(e)=> setCityName(e.target.value)} />
            <button className='ml-2
             bg-green-400
              font-semibold 
              rounded-lg
               px-4 py-2 hover:bg-green-500'
               onClick={handleSearch}>Search</button>

            </div>
            <div className="place flex flex-col font-semibold  justify-center items-center">
              <img src={cloudyWeather} alt="img" className='relative w-[30%] h-[30%]' />
              <h1 className='text-2xl'>{weatherData?.temperature}degree</h1>
              <h2 className='text-2xl'>{weatherData?.location}</h2>
            </div>
            <div className="weather-details flex justify-between">
              <div className="col">
              <img src={humidity} alt="humidity"/>
              <div className="data ">

              <h1 className='text-xl font-semibold'>{weatherData?.humidity}%</h1>
              <h1 className='text-xl font-semibold'>Humidity</h1>
              </div>

              </div>
              <div className="col">
              <img src={wind} alt="humidity"  />
              <div className="data">
              <h1 className='text-xl font-semibold'>{weatherData?.windSpeed} km/h</h1>
             <h1 className='text-xl font-semibold'>Wind Speed</h1>

              </div>

              </div>
            </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default App
