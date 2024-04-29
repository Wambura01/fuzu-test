import React from "react";
import { useTranslation } from "react-i18next";

import Wind from "../../assets/wind.webp";
import Humidity from "../../assets/humidity.webp";

import "./landing.css";
import { formatDate, formatTime } from "../../utils/utils";
import WeatherIcon from "../weather-icon/weather-icon";
import Topbar from "../topbar/topbar";

function Landing({ weather }) {
  const { t } = useTranslation();

  return (
    <div className="page-container cloudy-bg" data-testid="page-container">
      <Topbar />
      <div className="page-title_container" data-testid="page-title_container">
        <h1 className="title">{t("Weather Forecast")}</h1>
      </div>
      <div
        className="main-content-container"
        data-testid="main-content-container"
      >
        <div
          className="weather-icon-container"
          data-testid="weather-icon-container"
        >
          <WeatherIcon weatherId={weather?.current?.weather[0]?.id} />
        </div>
        <div className="content-container" data-testid="content-container">
          <div className="temp-container" data-testid="temp-container">
            <p className="temp">{weather?.current?.temp}&deg;C</p>
          </div>
          <div className="weather-container" data-testid="weather-container">
            <span>{formatDate(weather?.current?.dt)}:</span>
            <p className="weather">
              {t(weather?.current?.weather[0].description)}
            </p>
          </div>
          <div className="location-container" data-testid="location-container">
            <p className="location">Nairobi</p>
          </div>
          <div className="info-container" data-testid="info-container">
            <div className="info" data-testid="info-humidity">
              <div className="info-img-container">
                <img className="info-img" src={Humidity} alt="humidity" />
              </div>
              <div className="info-text-container">
                <p className="text">{weather?.current?.humidity}%</p>
                <p className="sub-text">{t("Humidity")}</p>
              </div>
            </div>
            <div className="info" data-testid="info-wind-speed">
              <div className="info-img-container">
                <img className="info-img" src={Wind} alt="rain" />
              </div>
              <div className="info-text-container">
                <p className="text">{weather?.current?.wind_speed} m/sec</p>
                <p className="sub-text">{t("Wind Speed")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breakdown-container" data-testid="breakdown-container">
        <div
          className="hourly-breakdown_container"
          data-testid="hourly-breakdown_container"
        >
          <div className="breakdown_title">
            <h2>{t("Hourly Breakdown")}</h2>
          </div>
          <div
            className="hourly-breakdown_content_container"
            data-testid="hourly-breakdown_content_container"
          >
            {weather?.hourly?.map((hour) => (
              <div
                key={hour?.dt}
                className="hourly-breakdown_content"
                data-testid="hourly-breakdown_content"
              >
                <p className="hour">{formatTime(hour?.dt)}</p>
                <div className="img-container">
                  <WeatherIcon weatherId={hour?.weather[0]?.id} />
                </div>
                <p className="temp">{hour?.temp}&deg;C</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="daily-breakdown_container"
          data-testid="daily-breakdown_container"
        >
          <div className="breakdown_title">
            <h2>{t("Day Breakdown")}</h2>
          </div>
          <div
            className="daily-breakdown_content_container"
            data-testid="daily-breakdown_content_container"
          >
            {weather?.daily?.map((day) => (
              <div
                key={day?.dt}
                className="daily-breakdown_content"
                data-testid="daily-breakdown_content"
              >
                <div className="img-container">
                  <WeatherIcon weatherId={day?.weather[0]?.id} />
                </div>
                <div className="day-info">
                  <p className="date">{formatDate(day?.dt)}</p>
                  <p className="weather">{t(day?.weather[0]?.description)}</p>
                </div>
                <div className="temp" data-testid="daily-temp">
                  {day?.temp?.day}&deg;C
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
