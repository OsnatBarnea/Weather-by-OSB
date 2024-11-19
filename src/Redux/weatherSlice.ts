import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherModel } from "../Models/WeatherModel";

//Initiated the city
export function initWeatherInRedux(currentState: WeatherModel, action: PayloadAction<WeatherModel>): WeatherModel {
    const newState =  action.payload; //the given city
    return newState
}

//update
export function updateWeatherInRedux(currentState: WeatherModel, action: PayloadAction<WeatherModel>): WeatherModel {
    const newState =  action.payload; //the given city
    return newState
}

export function deleteWeatherInRedux(currentState: WeatherModel, action: PayloadAction<number>): WeatherModel {
    const newState = {};
    return newState;
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState: null,
    reducers: { initWeatherInRedux, updateWeatherInRedux, deleteWeatherInRedux }
});

export const weatherActions = weatherSlice.actions;