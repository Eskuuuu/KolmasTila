import { useRouteError } from "react-router-dom";
import NavBar from "../Components/navbar/navbar";
import "./error-page.css";

// This is the error page that will be shown when a route error occurs.
// It will be shown for 3 seconds before redirecting to the home page.

export default function ErrorPage() {
  return (
    <div>
      <div className="error-container">
        <h1 className="error-hero">404</h1>
        <p className="error-text">🚧Ooooops, page not found🚧</p>
      </div>
    </div>
  );
}
