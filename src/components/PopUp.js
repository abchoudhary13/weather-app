import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import { dateFormat } from '../common/extraFunctions';

const PopUp = (props) => {
    const { date, day } = dateFormat(props.data.dt);
    if(!props.isVisible) return null;
    const handleClose = (e) => {
        if (e.target.id === "outerpart") props.clickHandler();
    };
    console.log(props.data);
    return (
        <div
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center text-black"
      id="outerpart"
      onClick={handleClose}
    >
      <div className="w-[100%] h-[90vh] md:w-[60%] lg:w-[40%] bg-white flex flex-col rounded-lg px-4 md:px-14 gap-4">
        <button className="text-black place-self-end mt-2 -mr-2">
          <AiOutlineClose
            size={25}
            className="cursor-pointer text-purple-500 border border-gray-200 rounded-lg shadow-sm hover:border-purple-500"
            onClick={props.clickHandler}
          />
        </button>
        <div className='bg-purple-500 text-center text-xl py-2 text-white rounded-full'>
            {date}<br/>{day}
        </div>
        <div className="w-full p-2 text-center flex flex-row justify-between gap-2 text-purple-500">
            <div className="text-lg font-semibold w-full text-purple-500 text-left py-2">
              <ul className="list-none space-y-2">
                <li>Felt Temp.</li>
                <li>Humidity</li>
                <li>Wind</li>
                <li>Pressure</li>
                <li>Day Temp.</li>
                <li>Evening Temp.</li>
                <li>Night Temp.</li>
                <li>Max Temp.</li>
                <li>Min Temp.</li>
              </ul>
            </div>
            <div className="text-lg w-full font-semibold bg-purple-500 text-white text-left px-4 py-2 rounded-3xl">
              <ul className="list-none space-y-2">
                <li>{(props.data.feels_like.day).toPrecision(4)}°C</li>
                <li>{props.data.humidity}%</li>
                <li>{(props.data.wind_speed * 3.6).toPrecision(3)} KPH</li>
                <li>{(props.data.pressure).toPrecision(4)} hPa</li>
                <li>{(props.data.temp.day).toPrecision(4)}°C</li>
                <li>{(props.data.temp.eve).toPrecision(4)}°C</li>
                <li>{(props.data.temp.night).toPrecision(4)}°C</li>
                <li>{(props.data.temp.max).toPrecision(4)}°C</li>
                <li>{(props.data.temp.min).toPrecision(4)}°C</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    )
}

export default PopUp