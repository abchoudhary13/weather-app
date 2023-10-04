import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {getDataByLocation} from '../redux/actions';
import Loading from './Loading';
import Error from './Error';
import Card from './Card';
import { getItem } from '../common/extraFunctions';

const Home = () => {
  const { isLoading, weatherData, forcastData, isError } = useSelector((state) => state, shallowEqual);
  const dispatch=useDispatch();
  useEffect(() => {
    let weather = getItem("weather");
    !weather && dispatch(getDataByLocation());
  });

  return isLoading ? (
    <Loading /> 
    ) : isError ? (
      <Error />
    ) : (
      <>
      <div className="flex flex-col pt-8 md:pt-8 pb-4 gap-8">
        <div className="px-5 p md:pt-2 flex gap-8 flex-col md:flex-row justify-evenly justify-items-center">
          <div className="w-full py-4cd md:w-[50%] lg:w-[36%] rounded-3xl shadow-xl text-center flex flex-col justify-evenly justify-items-center font-bold text-purple-500 border">
            <h1 className="text-4xl py-4 sm:text-5xl">{weatherData.name}</h1>
            <h1 className="text-8xl py-2 sm:text-9xl">
              {(weatherData.main.temp - 273.15).toPrecision(2)}°C
            </h1>
            <h1 className="text-3xl py-4 sm:text-4xl">{weatherData.weather[0].main}</h1>
          </div>
          <div className="w-full md:w-[50%] lg:w-[36%] p-2 rounded-3xl shadow-xl text-center flex flex-row justify-between gap-2 text-purple-500 border">
            <div className="text-xl xl:text-2xl font-semibold w-full pl-4 py-8 xl:px-8 xl:py-4 text-purple-500 text-left">
              <ul className="list-none space-y-4">
                <li>Felt Temp.</li>
                <li>Humidity</li>
                <li>Wind</li>
                <li>Visibility</li>
                <li>Max Temp.</li>
                <li>Min Temp.</li>
              </ul>
            </div>
            <div className="w-[90%] text-xl xl:text-2xl md:w-full font-semibold px-4 py-8 xl:px-8 xl:py-4 rounded-[32px] bg-purple-500 text-white text-left">
              <ul className="list-none space-y-4">
                <li>{(weatherData.main.feels_like - 273.15).toPrecision(4)}°C</li>
                <li>{weatherData.main.humidity}%</li>
                <li>{(weatherData.wind.speed * 3.6).toPrecision(3)} KPH</li>
                <li>{(weatherData.visibility * 0.001).toPrecision(4)} Km</li>
                <li>{(weatherData.main.temp_max - 273.15).toPrecision(4)}°C</li>
                <li>{(weatherData.main.temp_min - 273.15).toPrecision(4)}°C</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid pt-8 pb-2 px-2 font-semibold grid-cols-2 gap-8 justify-evenly justify-items-center sm:grid-cols-3 sm:gap-x-0 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {forcastData.map((data,index) => <Card key={index} data={data}/>)}
        </div>
      </div>
    </>
  );
}

export default Home;