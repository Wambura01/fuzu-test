import React, { useEffect, useState } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import "./App.css";
import Landing from "./components/landing/landing";
import useStore from "./zustand/useStore";
import Loader from "./components/loader/loader";
import { resources } from "./utils/translation";
import Error from "./components/error/error";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { weather, setWeather } = useStore((state) => ({
    weather: state.weather,
    setWeather: state.setWeather,
  }));

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=-1.286389&lon=-36.817223&appid=fe193052bae70a2953448a8d52168e33&units=metric`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchWeather();
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="App">
      <Landing weather={weather} />
    </div>
  );
}

export default App;
