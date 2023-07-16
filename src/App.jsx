import { useState } from 'react'
import CurrentWeather from '../components/current-weather/CurrentWeather'
import Search from '../components/search/Search'
import { WEATHER_API_KEY, WEATHER_API_URL } from './API'
import './App.css'
import Forecast from '../components/forecast/Forecast'
import CurrentLocation from './CurrentLocation'


function App() {
const [currentWeather,setCurrentWeather]=useState(null)
const [forecast,setForecast]=useState(null)
const handleOnSearchChange =(searchData)=>{
  const[lat,lon]=searchData.value.split(" ")
  const currentWeatherFetch= fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
  const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
  Promise.all([currentWeatherFetch, forecastFetch])
  .then (async (response)=>{
    const weatherResponse = await response[0].json();
    const forecastResponse = await response[1].json();
    setCurrentWeather({city :searchData.label, ...weatherResponse});
    setForecast({city :searchData.label, ...forecastResponse});
  })
  .catch((err)=>console.log(err))
}
console.log(currentWeather)
console.log(forecast)

  return (
    <div className='container'>
     <div className="search-bar"><Search onSearchChange={handleOnSearchChange} /></div>
      {currentWeather &&<CurrentWeather data={currentWeather} />}
      {forecast &&<Forecast data={forecast}/>}
      <CurrentLocation />
    </div>

  )
}

export default App
