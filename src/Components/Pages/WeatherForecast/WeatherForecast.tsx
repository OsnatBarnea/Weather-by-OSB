import "./WeatherForecast.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/store";
import { useEffect, useState } from "react";
import { WeatherModel } from "../../../Models/WeatherModel";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, Label } from "recharts";
import { useNavigate } from "react-router-dom";

export function WeatherForecast(): JSX.Element {
    const weatherDays = useSelector<AppState, WeatherModel[]>(
        (state) => state.weather.days
    );
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (weatherDays.length > 0) {
            setLoading(false);
        }
    }, [weatherDays]);

    const chartData = weatherDays.slice(0, 3).map((day) => ({
        date: day.datetime,
        temp: day.temp,
        tempMin: day.tempmin,
        tempMax: day.tempmax,
    }));

    return (
        <div className="WeatherForecast">
            {loading ? (
                <Spinner />
            ) : (
                <div className="graphDiv">
                    <br /> <br />
                    <ResponsiveContainer>
                        <LineChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="date" className="XAxis" padding={{ left: 20, right: 20 }}>
                                <Label value="Date" offset={-5} position="insideBottomRight" />
                            </XAxis>
                            <YAxis className="YAxis" padding={{ top: 20, bottom: 20 }}>
                                <Label value="Temperature (°C)" angle={-90} position="insideLeft" offset={10} />
                            </YAxis>
                            <Tooltip />
                            <Legend wrapperStyle={{ padding: 20 }} />
                            <Line type="monotone" dataKey="temp" stroke="#ffcc00" name="Temperature" />
                            <Line type="monotone" dataKey="tempMin" stroke="#00bfff" name="Minimum Temperature" />
                            <Line type="monotone" dataKey="tempMax" stroke="#e60000" name="Maximum Temperature" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
            <br /> <br /> <br />
            <button className="backButton" onClick={() => navigate("/home")}>Back</button>
        </div>
    );
}
