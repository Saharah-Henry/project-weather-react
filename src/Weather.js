import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import Forecast from "./Forecast";
import Navigation from "./Navigation";
import ConvertTemp from "./ConvertTemp";
export default function Weather(props) {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState(false);
  const [weather, setWeather] = useState("");

  function getWeather(response) {
    console.log(response);
    setMessage(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "1f41293f8bd3e51a0e9ae9237158e1cb";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search " className="search-bar" onChange={updateCity} />
      <button type="Submit" className="btn btn-primary">
        {" "}
        Search
      </button>
      <button type="submit" className="btn btn-success">
        Current
      </button>
    </form>
  );
  if (message) {
    return (
      <div className="container">
        <div className="weather-container">
          <Navigation />
          <div className="weather-summary">
            <form onSubmit={handleSubmit}>
              <input
                type="search "
                className="search-bar"
                onChange={updateCity}
              />
              <button type="Submit" className="btn btn-primary">
                {" "}
                Search
              </button>
              <button type="submit" className="btn btn-success">
                Current
              </button>
            </form>

            <div className="weather-summary">
              <h1>{city}</h1>
              <div className="day-time">
                <CurrentDate date={weather.date} />
              </div>
              <div className="weather-description">{weather.description}</div>
            </div>
            <div className="weather-info row mt-2">
              <div className="col-sm-6">
                <div className="current-temperature col-sm-6 ">
                  <span className="all-temp ">
                    <img src={weather.icon} width={60} alt="" />
                    <ConvertTemp celsius={weather.temperature} />
                  </span>
                </div>
              </div>
              <div className="humidity-wind col-sm-6 mt-2">
                <div className="humidity">Humidity: {weather.humidity}%</div>
                <div className="wind">Wind: {weather.wind} km/h </div>
              </div>
            </div>
            <div className="row">
              <Forecast day="Mon" />
              <Forecast day="Tue" />
              <Forecast day="Wed" />
              <Forecast day="Thu" />
              <Forecast day="Fri" />
            </div>
          </div>
        </div>
        <a
          href="https://github.com/Saharah-Henry/project-weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Saharah Henry
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <div className="weather-container">
            <Navigation />
            {form}
          </div>
        </div>
        <a
          href="https://github.com/Saharah-Henry/project-weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Saharah Henry
      </div>
    );
  }
}
