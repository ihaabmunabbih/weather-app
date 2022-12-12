import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import Forecast from './Forecast';

export default function Weather(props) {
    var weather = props.weather;
    const navigate = useNavigate();
    const dateBuilder = (d) => {
      let months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days    = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      let day     = days[d.getDay()];
      let date    = d.getDate();
      let month   = months[d.getMonth()];
      let year    = d.getFullYear();
  
      return `${day}, ${date} ${month} ${year}`;
    }

    const toMaps=()=>{
        navigate('/Maps', {state:weather});
    }
    
    return (
        <div>
            {(typeof weather.current != "undefined") ? (
            <div>
                <div className="location-box">
                    <div className="location">{weather.location.name}, {weather.location.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">
                        {Math.round(weather.current.temp_c)}°C
                        <a className="tap" onClick={()=>{toMaps()}}>Tap for Detail</a>
                    </div>
                    <div className="weather">
                        {weather.current.condition.text}
                    </div>
                </div>
                <Forecast data={weather.forecast}/>
            </div>
            ) : ('')}
        </div>
    )
}
