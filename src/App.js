//import LandingPage from "./index/LandingPage";
import "../../public/css/styles.css";
import Authentication from "./authentication/Authentication";
export default function app() {
  return (
    <div className="container">
      <Authentication />
    </div>
  );
}
