import { useState } from "react";
import "../../public/css/navbar.css";
//import { BsBlockquoteLeft } from "react-icons/bs";
import ExpandNavbar from "./ExpandNavbar";
export default function Navbar(props) {
  const [captions, setCaptions] = useState([
    { buttonText: "+", text: "+" },
    { buttonText: "-", text: "-" }
  ]);
  const [flag, setFlag] = useState(0);

  return (
    <div
      className="navigation-bar"
      style={
        captions[flag].buttonText === "-" ? { paddingBottom: "1px" } : null
      }
    >
      <ul>
        <li id="logo">
          <a href="/#">
            <span>Math</span>
            <span id="red-span">Flix</span>
          </a>
        </li>
        <li className="nav-link" id="list-hide">
          <div
            className="toggle"
            onClick={() => {
              setCaptions(captions);
              setFlag(flag === 0 ? 1 : 0);
            }}
          >
            {captions[flag].buttonText}
          </div>
        </li>
        <li className="nav-link nav-link-right">
          <a href="/#">Home</a>
        </li>
        <li className="nav-link nav-link-right">
          <a href="/#">Features</a>
        </li>
        <li className="nav-link nav-link-right">
          <a href="/#">Contact Us</a>
        </li>
      </ul>
      {captions[flag].buttonText === "-" ? <ExpandNavbar /> : null}
    </div>
  );
}
