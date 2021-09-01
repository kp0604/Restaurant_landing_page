import "./MainSec.css";

export default function FoodCard(props) {
  return (
    <div className="Card">
      <img src={props.foodsrc} className="foodImage" alt={props.name}></img>
      <h5>{props.name}</h5>
    </div>
  );
}
