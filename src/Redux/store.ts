import { configureStore } from "@reduxjs/toolkit";
import { WeatherModel } from "../Models/WeatherModel";
import { weatherSlice } from "./weatherSlice";

//Global state
export type AppState = {
    weather: WeatherModel;
}

export const store = configureStore<AppState>({
    reducer: {
        weather: weatherSlice.reducer
    }
})