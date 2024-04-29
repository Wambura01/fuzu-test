import React from "react";

import Sunny from "../../assets/sunny.png";
import Cloudy from "../../assets/cloudy.webp";
import Rain from "../../assets/rain.webp";
import Snow from "../../assets/snow.webp";
import { renderImage } from "../../utils/utils";

function WeatherIcon({ weatherId }) {
  const imgSource = renderImage(weatherId);

  if (imgSource === "Rain") {
    return <img className="weather-icon" src={Rain} alt="weather-icon" />;
  } else if (imgSource === "Clear") {
    return <img className="weather-icon" src={Sunny} alt="weather-icon" />;
  } else if (imgSource === "Cloudy") {
    return <img className="weather-icon" src={Cloudy} alt="weather-icon" />;
  } else if (imgSource === "Snow") {
    return <img className="weather-icon" src={Snow} alt="weather-icon" />;
  } else {
    return null;
  }
}

export default WeatherIcon;
