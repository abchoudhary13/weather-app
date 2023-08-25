import { GET_DATA_ERROR, GET_DATA_SUCCESS, GET_DATA_LOADING } from "./actionTypes";
import { APIKey } from "../common/WeatherApiKey";
import weatherApi from "../common/WeatherApi";
import { setItem } from "../common/extraFunctions";

export const getDataLoading = () => {
    return{
        type: GET_DATA_LOADING
    }
}

export const getDataSuccess = payload => {
    return{
        type: GET_DATA_SUCCESS,
        payload: payload
    }
}

export const getDataError = () => {
    return{
        type: GET_DATA_ERROR
    }
}

export const getDataByLocation = () => (dispatch) => {
    const success = async (position) => {
        try {
            let {latitude,longitude} = position.coords;
            dispatch(getDataLoading());
            let weatherData = await weatherApi.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`);
            weatherData=weatherData.data;
            let forcastData = await weatherApi.get(`/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${APIKey}`);
            forcastData = forcastData.data.daily;
            let payload = {weatherData,forcastData};
            setItem("weather",payload);
            dispatch(getDataSuccess(payload));
        } catch (err) {
            console.log(err);
            dispatch(getDataError());
        }
    }
    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert("Please turn on your location");
    }
    navigator.geolocation.getCurrentPosition(success,error);
}

export const getDataByCity = (city) => async (dispatch) => {
    try {
        dispatch(getDataLoading());
        let weatherData = await weatherApi.get(`/weather?q=${city}&appid=${APIKey}`);
        weatherData = weatherData.data;
        let { lon, lat } = weatherData.coord;
        let forcastData = await weatherApi.get(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${APIKey}`);
        forcastData = forcastData.data.daily;
        let payload = { weatherData, forcastData };
        setItem("weather",payload);
        dispatch(getDataSuccess(payload));
    } catch (err) {
        console.log(err);
        dispatch(getDataError());
        alert("City weather data doesn't exist");
    }
}