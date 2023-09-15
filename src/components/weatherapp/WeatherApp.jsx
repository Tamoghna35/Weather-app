import React, { useState } from "react";
import "./WeatherAppStyle.css";

import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import search_icon from "../assets/search.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const WeatherApp = () => {
  let apiKey = "eca1ff1d52f4f49eaf04bb4d496714da";

  const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

  //Search Function

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let humidity = document.getElementsByClassName("humidity-percentage");
    let wind = document.getElementsByClassName("wind-speed");
    let temparature = document.getElementsByClassName("weather-temp");
    let location = document.getElementsByClassName("weather-location");

    wind[0].innerHTML = Math.floor(data.wind.speed) + " Km/h";
    temparature[0].innerHTML = data.main.temp + " C";
    location[0].innerHTML = data.name;
    humidity[0].innerHTML = data.main.humidity + " %";

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWeatherIcon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWeatherIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWeatherIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWeatherIcon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherIcon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWeatherIcon(snow_icon);
    } else {
      setWeatherIcon(clear_icon);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} />
        </div>
      </div>
      <div className="weather-image">
        <img src={weatherIcon} />
      </div>
      <div className="weather-temp">24 C</div>
      <div className="weather-location">Kaligram</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} className="icon" />
          <div className="data">
            <div className="humidity-percentage">60%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} className="icon" />
          <div className="data">
            <div className="wind-speed">18Km/Hour</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
