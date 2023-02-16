import Navbar from "../global/Navbar";
import "../../public/css/navbar.css";
import "../../public/css/auth/auth.css";
import Auth from "./Auth";
export default function Authentication() {
  const userIsRegistered = true;
  return (
    <>
      <Navbar />
      <Auth isRegistered={userIsRegistered} />
    </>
  );
}
