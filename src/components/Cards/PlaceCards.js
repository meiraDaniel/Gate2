import React, { useContext } from "react";
import { MyContext } from "../../Context/Context";
import summerImg from "../../images/summer.jpg";
import "./Cards.scss";
import { useHistory } from "react-router-dom";

function PlaceCards({
  title,
  activities,
  numberPeople,
  price,
  numberDays,
  data,
}) {
  const { setTours_selected } = useContext(MyContext);
  const history = useHistory();

  const handleOnClick = () => {
    setTours_selected({
      type: "BUY",
      selected: data,
    });
    history.push("/checkout");
  };

  return (
    <div className="place-card">
      <div className="place-card__img">
        <button onClick={handleOnClick} className="button--big">
          buy me
        </button>
        <img src={summerImg} alt="place" />
      </div>
      <div className="place-card__content">
        <h1 className="place-card__title">{title}</h1>
        <ul className="place-card__text">
          {activities.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
        <div className="place-card__botom">
          <p className="place-card__botomQtdPeople">
            {numberPeople}{" "}
            {numberPeople > 1 ? <span>people</span> : <span>person</span>}
          </p>
          <p className="place-card__botomQtdDays">{numberDays} days</p>
          <p id="price">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default PlaceCards;
