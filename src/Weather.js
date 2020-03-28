import React from "react";
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";

export const Weather = () => {
  const API = process.env.REACT_APP_PUB_KEY;
  return (
    <div>
      <ReactWeather forecast="today" apikey={API} type="city" city="Depok" />
    </div>
  );
};
