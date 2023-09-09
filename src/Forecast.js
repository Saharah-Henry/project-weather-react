import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="col-sm-2">
      <div className="forecast-day">{props.day}</div>
      <div className="forecast-icon">🌤️</div>
      <div className="forecast-temperature">15°</div>
    </div>
  );
}
