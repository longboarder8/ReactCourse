import { useEffect, useState } from "react";

const weatherUrl = "https://mm214.com/demo.php";

function App() {
  const [weather, setWeather] = useState(null);

useEffect(function () {
  // we can't make the effect callback itself async,
  // so we define an inner async function
  async function fetchWeather() {
    try {
      const res = await fetch(weatherUrl); // fetch the raw response from the API
      const data = await res.json(); // parse the response into a JavaScript object
      setWeather(data); // save the data into state
    } catch (error) {      
      console.error("Error fetching weather:", error); // error message if needed
    }
  }
  
  fetchWeather(); // call the async function
}, []); // run only once after the component mounts
  
  // displays this message until weather data arrives
  if (!weather) return <h2>Loading weather...</h2>; 
  
  // current temperature
  let tempK = null; // start with null by default
    if (weather && weather.main) { // first make sure "weather" exists
      tempK = weather.main.temp; // if "main" exists inside weather, grab temp
    }
  
  let tempF = null; // default to null in case we don't have a valid temp
    if (tempK !== null) { // only calculate if tempK actually has a value
      let tempC = tempK - 273.15; // convert Kelvin to Celsius
      let tempFahrenheit = (tempC * 9) / 5 + 32; // convert Celsius to Fahrenheit
      tempF = tempFahrenheit.toFixed(1); // round to one decimal place and save result
    }

  // max temperature
  let tempKMax = null; // start with null by default
    if (weather && weather.main) { // first make sure "weather" exists
      tempKMax = weather.main.temp_max; // if "main" exists inside weather, grab temp
    }
  
  let tempFMax = null; // default to null in case we don't have a valid temp
    if (tempK !== null) { // only calculate if tempK actually has a value
      let tempC = tempKMax - 273.15; // convert Kelvin to Celsius
      let tempFahrenheit = (tempC * 9) / 5 + 32; // convert Celsius to Fahrenheit
      tempFMax = tempFahrenheit.toFixed(1); // round to one decimal place and save result
    }

  // minimum temperature
  let tempKMin = null; // start with null by default
    if (weather && weather.main) { // first make sure "weather" exists
      tempKMin = weather.main.temp_min; // if "main" exists inside weather, grab temp
    }
  
  let tempFMin = null; // default to null in case we don't have a valid temp
    if (tempK !== null) { // only calculate if tempK actually has a value
      let tempC = tempKMin - 273.15; // convert Kelvin to Celsius
      let tempFahrenheit = (tempC * 9) / 5 + 32; // convert Celsius to Fahrenheit
      tempFMin = tempFahrenheit.toFixed(1); // round to one decimal place and save result
    }

  return (
    // renders weather details
    <div className="container-fluid mt-0 pt-0 p-4" >
          <h1>{weather.name}'s weather today:</h1>
          <p><b>Conditions:</b> {weather.weather?.[0]?.description}</p>
          <p><b>Temp:</b> {tempF} °F</p>
          <p><b>Temp (high):</b> {tempFMax} °F</p>
          <p><b>Temp (low):</b> {tempFMin} °F</p>
          <p><b>Humidity:</b> {weather.main?.humidity}%</p>
          <p><b>Wind:</b> {weather.wind?.speed} m/s</p>
        </div>
      );
    }

export default App;
