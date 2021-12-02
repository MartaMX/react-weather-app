import React from "react";
import axios from "axios";

export default function WeatherInfo() {
  function getTemperature(response) {
    //console.log(response);
    let temperat = Math.round(response.data.main.temp);
    alert(temperat);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=f020078c4a89cd61e6aa94f2028cbd7e&units=metric`;
  axios.get(url).then(getTemperature);
  return "Aquí va la temperatura";
}
