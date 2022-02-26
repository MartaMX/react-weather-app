import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 id="city">{props.data.city}</h1>

      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>
          <span id="day"> Date </span>
          <span id="time"> 5:00,</span>
          <span id="description"> {props.data.description}</span>
        </li>
        <li>
          Humidity: <span id="humidity"> {props.data.humidity} </span>
          %, Wind:
          <span id="wind">{props.data.wind}</span>
          km/h
        </li>
      </ul>
    </div>
  );
}
