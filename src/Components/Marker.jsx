import React from 'react';
import ReactTooltip from 'react-tooltip';

import './Marker.css'

export default function Marker(props) {
    let aqi = props.aqi.air_quality;
    let defraIndex = aqi["gb-defra-index"];
    let classIndex = "marker ";
    let classTable = "header ";
    let statusPollution = "";

    if (defraIndex <= 3) {
        classIndex += "low";
        classTable += "low";
        statusPollution = "LOW";
    }
    else if (defraIndex <= 6) {
        classIndex += "moderate";
        classTable += "moderate";
        statusPollution = "MODERATE";
    }
    else if (defraIndex <= 9){
        classIndex += "high";
        classTable += "high";
        statusPollution = "HIGH";
    }
    else {
        classIndex += "very-high";
        classTable += "very-high";
        statusPollution = "VERY-HIGH";
    }
    return (
        <div>

                <div className={classIndex}>
                    <p data-tip data-for="aqi-detail">{defraIndex}</p>
                {/*  */}
            </div>
            <ReactTooltip id='aqi-detail' className='aqi-detail' backgroundColor='white' textColor='black' effect='float'>
                <table>
                    <tr className={classTable}>
                        <td className='unit'>AQI</td>
                        <td>{aqi["gb-defra-index"]}</td>
                    </tr>
                    <tr>
                        <td className='unit'>Humidity</td>
                        <td>{Math.round(props.aqi.humidity)}</td>
                    </tr>
                    <tr>
                        <td className='unit'>CO</td>
                        <td>{Math.round(aqi.co)}</td>
                    </tr>
                    <tr>
                        <td className='unit'>NO2</td>
                        <td>{Math.round(aqi.no2)}</td>
                    </tr>
                    <tr>
                        <td className='unit'>O3</td>
                        <td>{Math.round(aqi.o3)}</td>
                    </tr>
                    <tr>
                        <td className='unit'>SO2</td>
                        <td>{Math.round(aqi.so2)}</td>
                    </tr>
                    <tr>
                        <td className='unit'>PM25</td>
                        <td>{Math.round(aqi.pm2_5)}</td>
                    </tr>
                    <tr>
                        <td className='unit'>PM10</td>
                        <td>{Math.round(aqi.pm10)}</td>
                    </tr>
                    <tr className={classTable}>
                        <td colSpan={2}>Air Pollution Banding</td>
                    </tr>
                    <tr className={classTable}>
                        <td colSpan={2}>{statusPollution}</td>
                    </tr>
                </table>
            </ReactTooltip>
        </div>
    )
}
