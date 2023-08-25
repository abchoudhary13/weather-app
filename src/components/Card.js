import React, { useState } from "react";
import { dateFormat } from "../common/extraFunctions";
import { BsCloudMoon, BsSun } from "react-icons/bs";
import PopUp from "./PopUp";

const Card = (props) => {
  const { data } = props;
  const { date, day } = dateFormat(data.dt);
  const [visibility,setVisibility] = useState(false);
  const visibilityHandler = () => {
    setVisibility(!visibility);
  }
  return (
    <>
      <PopUp isVisible={visibility} clickHandler={visibilityHandler} data={data}/>
      <div className="h-44 w-36 md:h-48 md:w-32 flex flex-col">
        <div className="h-20 px-2 py-3 text-xl text-center bg-purple-500 text-white rounded-t-3xl border">
          <p>{date}</p>
          <p>{day}</p>
        </div>
        <div className="h-32 bg-gray-50 py-2 text-2xl text-purple-500 text-center rounded-b-3xl shadow-2xl border hover:bg-purple-50 cursor-pointer" onClick={visibilityHandler}>
          <div className="flex justify-evenly">
            <BsSun className="mt-1" />
            <h1>{data.temp.max.toPrecision(2)}°C</h1>
          </div>
          <div className="flex justify-evenly">
            <BsCloudMoon className="mt-1" />
            <h1>{data.temp.min.toPrecision(2)}°C</h1>
          </div>
          <h1>{data.weather[0].main}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
