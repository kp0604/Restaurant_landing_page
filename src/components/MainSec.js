import "./MainSec.css";
import FoodCard from "./foodCard.js";
import chickenBurger from "../foodImages/chickenBurger.jpg";
import farmhousePizza from "../foodImages/farmhousePizza.jpg";
import loadedNachos from "../foodImages/loadedNachos.jpg";
import mexicanTaco from "../foodImages/mexicanTaco.jpg";

export default function Mainsec() {
  return (
    <div className="mainSec">
      <div className="txt1">
        <p>What are you</p>
        <p>having for lunch?</p>
      </div>

      <div className="txt2">
        <p>Lorem njsadbhbdl asbdilb akbvil db,</p>
        <p>EhbfuhkB iubaifh iabfdb ibdai ke,</p>
        <p>Jfbuoebfu jdbfusbefub ewfsafd.</p>
        <div className="dash"></div>
      </div>

      <div className="foodSec">
        <FoodCard foodsrc={chickenBurger} name={"Chicken Burger"} />
        <FoodCard foodsrc={farmhousePizza} name={"Farmhouse Pizza"} />
        <FoodCard foodsrc={loadedNachos} name={"Loaded Nachos"} />
        <FoodCard foodsrc={mexicanTaco} name={"Mexican Taco"} />
      </div>
    </div>
  );
}
