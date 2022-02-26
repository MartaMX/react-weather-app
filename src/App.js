import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default App;

function App(props) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
    //    console.log(weatherData);
  }
  function Search() {
    const apiKey = "f020078c4a89cd61e6aa94f2028cbd7e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="wrapper">
            <div className="search">
              <form onSubmit={handleSubmit} id="search-form">
                <div className="row search">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      class="form-control"
                      id="city-input"
                      autocomplete="off"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="row">
              <div className="col-7">
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
              </div>
              <div className="col-5 right">
                <div className="clearfix weather-temperature">
                  <WeatherIcon code={weatherData.icon} size={52} />
                  <span className="float-left temperature" id="temperature">
                    {weatherData.temperature}
                  </span>
                  <span className="float-left unit">°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
