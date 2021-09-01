import "./Navbar.css";
import sc2 from "../NavbarImg/sc2.png";
import { useState } from "react";

export default function Navbar() {
  const [Dis, setDis] = useState(false);

  const toggleDis = () => setDis((prev) => !prev);

  return (
    <div className="Navbar">
      <div className="logo">
        <div
          className="ham"
          onClick={() => {
            toggleDis();
            console.log("yes");
          }}
        >
          <div className="ham1"></div>
          <div className="ham2"></div>
          <div className="ham3"></div>
        </div>
        <p>Lorem</p>
        <img src={sc2} alt="scart"></img>
      </div>

      <ul className={Dis ? "Navlist show" : "Navlist"}>
        <li className={Dis ? "Navlistli show" : "Navlistli"}>About</li>
        <li className={Dis ? "Navlistli show" : "Navlistli"}>Services</li>
        <li className={Dis ? "Navlistli show" : "Navlistli"}>Cuisine</li>
        <li className={Dis ? "Navlistli show" : "Navlistli"}>Gallery</li>
        <li className={Dis ? "Navlistli show" : "Navlistli"}>Contact</li>
        <li className={Dis ? "Navlistli show" : "Navlistli"}>Book</li>
      </ul>

      <button className={Dis ? "NavBtn show" : "NavBtn"}>Cart</button>
    </div>
  );
}
