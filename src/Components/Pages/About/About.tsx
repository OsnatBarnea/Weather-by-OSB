import { useTitle } from "../../../Utils/useTitle";
import "./About.css";

export function About(): JSX.Element {
    useTitle("About the site");
    
    return (
        <div className="About">
            <h3>About this site</h3>
            <p>This site shows the weather in the city of your choice.
                <br />
                It presents the temperature now at this location, and also the minimum and maximum temperature of the day.
                <br />
                You also get the humidity percentage and description of the weather.
                <br />
                After choosing a city, you can see three-days forecast by clicking the button.
                <br/>
                The data is taken from <a href="https://www.visualcrossing.com/" target="_blank">www.visualcrossing.com</a>
                <br/><br/>
                Hope you enjoy the site.
            </p>
        </div>
    );
}
