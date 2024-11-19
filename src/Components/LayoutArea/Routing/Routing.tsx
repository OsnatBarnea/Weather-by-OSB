import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { About } from "../../Pages/About/About";
import { Page404 } from "../../Pages/Page404/Page404";
import { Home } from "../../Pages/Home/Home";
import { WeatherForecast } from "../../Pages/WeatherForecast/WeatherForecast";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Router basename="/Weather-by-OSB">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/Three-days-forecast" element={<WeatherForecast />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
        </div>
    );
}
