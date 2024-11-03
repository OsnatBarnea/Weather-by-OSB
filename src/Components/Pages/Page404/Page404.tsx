import { useTitle } from "../../../Utils/useTitle";
import "./Page404.css";

export function Page404(): JSX.Element {
    useTitle("Page not found");

    return (
        <div className="Page404">
			<p>page not found</p>
        </div>
    );
}
