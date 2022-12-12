import React, { useState } from 'react';

import Weather from './Components/Weather';

const api = {
  key: "51fba81ef12645d085254046221601",
  base: "http://api.weatherapi.com/v1/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search= evt => {
    if (evt.key === "Enter") {
      if (query !== "") {
        fetch(`${api.base}forecast.json?q=${query}&days=3&aqi=yes&key=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setQuery('');
            setWeather(result);
          });
      }
    }
  }
  
  return (
    <div className={
      (typeof weather.current != "undefined")
       ? ((weather.current.temp_c > 16)
        ? 'app-warm' 
        : 'app') 
       : 'app'}>
      <main>
        <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
        </div>
        <Weather weather={weather} />
      </main>
    </div>
  );
}

export default App;
