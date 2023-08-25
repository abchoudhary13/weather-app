import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getForecast, getWeather } from "../redux/weatherSlice";
import Loading from "./Loading";

const ForcastListing = () => {
  const weather = useSelector(getWeather);
  const forecast = useSelector(getForecast);
  let forecastList = "";
  forecastList = forecast.daily?.map((fore, index) => {
    return <Card key={index} data={fore} />;
  });
  return (
    <div>
    {Object.keys(weather).length === 0 ? (
        <Loading/>
      ):(
      <div className="flex flex-col py-8 gap-8">
        <div className="flex flex-col sm:flex-row h-[55vh] justify-evenly justify-items-center">
          <div className="h-80 w-[36%] rounded-3xl shadow-2xl text-center flex flex-col justify-evenly justify-items-center px-20 font-bold text-blue-500">
            <h1 className="text-5xl">{weather.name}</h1>
            <h1 className="text-9xl">
              {(weather.main.temp - 273.15).toPrecision(2)}°C
            </h1>
            <h1 className="text-5xl">{weather.weather[0].main}</h1>
          </div>
          <div className="h-80 w-[36%] p-4 rounded-3xl shadow-2xl text-center flex flex-row justify-between gap-5 px-10 text-blue-500">
            <div className="text-xl py-7 text-blue-500 text-left">
              <ul className="list-none space-y-3">
                <li>Felt Temp.</li>
                <li>Humidity</li>
                <li>Wind</li>
                <li>Visibility</li>
                <li>Max Temp.</li>
                <li>Min Temp.</li>
              </ul>
            </div>
            <div className="w-[40%] text-xl px-5 py-7 rounded-2xl bg-blue-500 text-white text-left">
              <ul className="list-none space-y-3">
                <li>{(weather.main.feels_like - 273.15).toPrecision(4)}°C</li>
                <li>{weather.main.humidity}%</li>
                <li>{(weather.wind.speed * 3.6).toPrecision(4)} KPH</li>
                <li>{(weather.visibility * 0.001).toPrecision(4)} Km</li>
                <li>{(weather.main.temp_max - 273.15).toPrecision(4)}°C</li>
                <li>{(weather.main.temp_min - 273.15).toPrecision(4)}°C</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-evenly justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {forecastList}
        </div>
        <div className="text-center -pb-4">
          <p>Made with ❤️ by Anuj Beniwal</p>
        </div>
      </div>)}
    </div>
  );
};

export default ForcastListing;
