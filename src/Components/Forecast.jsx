import React from 'react'

export default function Forecast(data) {
    return (
        <div className='flex'>
            {data.data.forecastday.map((data, i) => {
                return <div className="weather-next" key={i}>
                            <div className="date">{data.date}</div>
                            <div className="temp" style={{backgroundImage: `url('${data.day.condition.icon}')`}}>
                            {data.day.avgtemp_c}°C
                            </div>
                            <div className="weather">
                            {data.day.condition.text}°C
                            </div>
                        </div>
            })
            }
        </div>
    )
}
