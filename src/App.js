import React from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://rate-limited.herokuapp.com/WeatherForecast");

      const data = await res.json();
      if (data?.length > 0) {
        setWeather([...data]);
      }
    })();
  }, []);
  console.log(weather);

  return (
    <div className='App'>
      {weather.map((weather,index) => (
        <div className='card' key={index}>
          <div className='card-body'>
            <p>Date: {weather.date}</p>
            <h5 className='card-title'>Summary: {weather.summary}</h5>
            <p className='card-text'>
              Temperature C: {weather.temperatureC}
            </p>
            <p className='card-text'>
            Temperature F: {weather.temperatureF}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
