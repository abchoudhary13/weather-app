import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { getDataByCity, getDataByLocation } from "../redux/actions";

const NavBar = () => {
  const [city,setCity] = useState("");
  const dispatch = useDispatch();

  const handleCityData = () => {
    dispatch(getDataByCity(city));
  }

  const handleLocationData = () => {
    dispatch(getDataByLocation());
  }

  const handleUndefined = () => {}

  return (
    <div className="h-32 sm:h-16 py-3 px-5 sm:justify-center flex flex-col sm:flex-row bg-purple-200">
      <div className="w-full pb-4 sm:mr-4 sm:w-[50%] lg:w-[30%]">
        <div className="flex">
          <input
            onKeyDown={(event) => {event.key === 'Enter' ? handleCityData(): handleUndefined()}}
            type="text"
            placeholder="Enter City"
            value={city}
            onInput={(e) => setCity(e.target.value)}
            className="rounded-s-2xl w-[100%] h-10 outline-none px-4"
          />
          <button onClick={handleCityData} className="bg-purple-500 rounded-e-2xl w-[20%] text-2xl text-white pl-3">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[50%] lg:w-[30%]">
        <button onClick={handleLocationData} className="bg-purple-500 hover:bg-purple-600 w-full h-10 rounded-2xl text-white text-lg flex justify-center pt-1 text-center"><FaLocationDot className="mt-[6px] pr-2"/>Your Location Weather</button>
      </div>
    </div>
  );
};

export default NavBar;
