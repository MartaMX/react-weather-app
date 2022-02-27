import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    //console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  //console.log(props.coordinates.lon);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    let apiKey = "f020078c4a89cd61e6aa94f2028cbd7e";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
