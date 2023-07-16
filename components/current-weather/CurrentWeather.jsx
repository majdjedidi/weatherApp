import React from 'react'
import './current-weather.css'
export default function CurrentWeather({data}) {
  return (
    <div className='weather'>
        <div className='current-weather'>
            <div className='top'>
                <div className="current">
                <h1 className='location'>Sousse, Tunisia</h1>
                <div className="current-status">
                 <p className='temp'>40°C</p>
                 <img src='./public/icons/01d.png' alt="weather-icon" className='weather-icon'/>
                 </div>
                 <p className='description'>Sunny</p>
                 <p className='current-feel'>Feels like 43°C</p>
                 </div>
                 
             </div>
             <div className='bottom'>
                <h2>Today</h2>
                <div className="general">
                <p className='min-max'> Temperature : Min 28°C / Max 44°C</p>
                <div className="gen-details">
                <p className="description-today">Sunny</p>
                <img src='./public/icons/01d.png' alt="weather-icon" className='weather-icon-mini'/>
                </div>
                </div>
                <div className="details">
                    <div className="detail">
                        <p className="param">Wind Speed</p>
                        <p className="value">12 km/h</p>
                    </div>
                    <div className="detail">
                        <p className="param">Pressure</p>
                        <p className="value">1020h Pa</p>
                    </div>
                    <div className="detail">
                        <p className="param">Humidity</p>
                        <p className="value">70%</p>
                    </div>
                    <div className="detail">
                        <p className="param">Precipitation</p>
                        <p className="value">0%</p>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}
