import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  console.log(props.coordinates);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-Day">Thu</div>
          <WeatherIcon code="01d" size={12} />
          <div className="WeatherForecast-Temperature">
            <span className="WeatherForecast-Temperature-min">19°</span>
            <span className="WeatherForecast-Temperature-max">21°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
