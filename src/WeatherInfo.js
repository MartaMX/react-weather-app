import React, { useState } from "react";
import axios from "axios";

export default function WeatherInfo() {
  let [temperat, setTemperat] = useState(0);
  function getTemperature(response) {
    console.log(response);
    console.log(response.data.main.temp);
    setTemperat(Math.round(response.data.main.temp));
    //alert(temperat);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=f020078c4a89cd61e6aa94f2028cbd7e&units=metric`;
  axios.get(url).then(getTemperature);
  return <span> {temperat} </span>;
}
