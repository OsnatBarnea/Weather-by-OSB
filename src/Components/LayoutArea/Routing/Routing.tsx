import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import { About } from "../../Pages/About/About";
import { Page404 } from "../../Pages/Page404/Page404";
import { Home } from "../../Pages/Home/Home";
import { WeatherForecast } from "../../Pages/WeatherForecast/WeatherForecast";
import { useState } from "react";
import { Menu } from "../Menu/Menu";

export function Routing(): JSX.Element {
    // const [city, setTheCity] = useState<string>("");

    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Three-days-forecast" element={<WeatherForecast />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
