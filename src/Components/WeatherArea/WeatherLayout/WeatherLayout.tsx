import { WeatherModel } from "../../../Models/WeatherModel";
import "./WeatherLayout.css";

type WeatherLayoutProps = {
    weather: WeatherModel;
}

export function WeatherLayout(props: WeatherLayoutProps): JSX.Element {
    const day = props.weather.days[0];
    return (
        <div className="WeatherLayout">
            <ul>
            <li>Date: {day.datetime}         |          Latitude: {props.weather.latitude}, Longitude: {props.weather.longitude}</li>

            <li className="markSpan">City: {props.weather.address}</li>

            <li className="markSpan">Temperature: {day.temp}°C</li>
     
            <li>Minimum Temperature: {day.tempmin}°C, Maximum Temperature: {day.tempmax}°C</li>
        
            <li>Humidity: {day.humidity}%</li>
         
            <li>Description: {props.weather.description}</li>

            </ul>

        </div>
    );
}
