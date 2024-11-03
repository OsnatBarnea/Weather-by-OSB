import "./Home.css";
import { Weather } from "../../WeatherArea/Weather/Weather";
import { useState } from "react";
import { useTitle } from "../../../Utils/useTitle";
import { useForm } from "react-hook-form";
import { weatherService } from "../../../Services/WeatherService";
import { NavLink } from "react-router-dom";
import { notify } from "../../../Utils/Notify";

type FormData = {
    city: string;
}

export function Home(): JSX.Element {
    useTitle("Home page");

    const { register, handleSubmit, reset } = useForm<FormData>();
    const [city, setCity] = useState<string>("");

    async function send(data: FormData) {
        const city = data.city.trim();
        if (city) {
            try {
                await weatherService.getWeather(city);
                setCity(city);
            }
            catch (error) {
                notify.error("Failed to fetch the data. Please try again");
                setCity("");
                reset();
            }
        }}

        function clearChoice() {
            setCity("");
            reset();
            weatherService.deleteWeatherFromRedux();
        }

        return (
            <div className="Home">
                <br />
                <NavLink className={`NavLink ${!city ? 'disabled' : ''}`} to="/Three-days-forecast"
                    onClick={(e) => !city && e.preventDefault()} >
                    Three days forecast
                </NavLink>
                <br />
                <form onSubmit={handleSubmit(send)}>
                    <input className="textBox" placeholder="write city of interest" type="text" {...register("city")} />
                    <button type="submit">send</button>
                    <button type="button" onClick={clearChoice}>clear</button>
                </form>
                <br /> <br />
                <div className="DisplayWeatherDiv">
                    {city && <Weather city={city} />}
                </div>
                <br />
            </div>
        );
    }
