import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

function App() {
  const [weatherDate, setWeatherData] = useState({});
  const [city, setCity] = useState("New York");
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
    });
  }
  function Search() {
    //const apiKey = "020078c4a89cd61e6aa94f2028cbd7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=f020078c4a89cd61e6aa94f2028cbd7e&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <p>Search</p>
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

          <p>DemoCity</p>
          <div className="row">
            <div className="col-7">
              <h1 id="city">{city}</h1>
              <ul>
                <li>
                  <span id="day"> Friday</span>
                  <span id="time"> 5:00,</span>
                  <span id="description"> Clear</span>
                </li>
                <li>
                  Humidity: <span id="humidity">56</span>%, Wind:
                  <span id="wind">0.89</span>
                  km/h
                </li>
              </ul>
            </div>
            <div className="col-5 right">
              <div className="clearfix weather-temperature">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/414/414927.png"
                  width="50"
                  class="float-left"
                  id="today-icon"
                />
                <span className="float-left temperature" id="temperature">
                  25
                  <WeatherInfo />
                </span>
                <span className="float-left unit">
                  <a href="#" class="active" id="celsius">
                    °C
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
