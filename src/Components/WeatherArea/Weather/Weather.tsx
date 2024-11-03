import { useEffect, useState } from "react";
import "./Weather.css";
import { WeatherModel } from "../../../Models/WeatherModel";
import { weatherService } from "../../../Services/WeatherService";
import { WeatherLayout } from "../WeatherLayout/WeatherLayout";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { notify } from "../../../Utils/Notify";

type WeatherProps = {
    city: string;
}

export function Weather({ city }: WeatherProps): JSX.Element {
    const [weather, setWeather] = useState<WeatherModel>();
    const [loading, setLoading] = useState<boolean>(true); 

    useEffect (() => {
        setLoading(true);
        weatherService.getWeather(city)
        .then(weather => {
            setWeather(weather);
            setLoading(false);
        })
        .catch(error => {
            notify.error("No data was found");
            setLoading(false);
    });
    }, [city])

    return (
        <div className="Weather">           
            {loading ? <Spinner /> : weather && weather.days.length > 0 ? <WeatherLayout weather={weather} /> : <p>No data available - type the city name</p>}
        </div>
    );
}
