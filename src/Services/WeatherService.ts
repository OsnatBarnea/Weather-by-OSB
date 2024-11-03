import axios from "axios"
import { WeatherModel } from "../Models/WeatherModel";
import { appConfig } from "../Utils/AppConfig";
import { store } from "../Redux/store";
import { weatherActions } from "../Redux/weatherSlice";

class WeatherService {

	public async getWeather(city: string): Promise<WeatherModel> {
        const response = await axios.get<WeatherModel>(appConfig.getWeatherFirstUrl + city + appConfig.getWeatherSectUrl);
        const weather = response.data;

        store.dispatch(weatherActions.initWeatherInRedux(weather)); //init the weather in the global state 
        return weather;
    }

    public deleteWeatherFromRedux(): void {
        store.dispatch(weatherActions.deleteWeatherInRedux()); //delete the weather from redux
    }
}

export const weatherService = new WeatherService();
