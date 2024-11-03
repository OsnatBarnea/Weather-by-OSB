import "./Spinner.css";
import spinnerImage from "../../../Assets/Images/spinner.gif";

export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={spinnerImage} id="SpinnerImage"/>
        </div>
    );
}
