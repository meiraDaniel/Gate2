import React, { useState, useContext } from "react";
import "./Checkout.scss";
import FormCheckout from "../../components/Form/FormCheckout";
import { useSpring, animated } from "react-spring";
import { MyContext } from "../../Context/Context";

export default function Checkout() {
  const [flag, set] = useState(false);
  const { tours_selected } = useContext(MyContext);

  const props = useSpring({
    to: {
      position: window.innerWidth < 1000 ? "absolute" : "relative",
      width: flag ? (window.innerWidth < 1000 ? "100%" : "80%") : "8%",
      transition: "ease",
      left: flag ? "0%" : window.innerWidth < 1000 ? "90%" : "13%",
    },
  });

  return (
    <div className="checkout--main">
      <div className="checktout--left-form">
        <FormCheckout />
      </div>

      <animated.div
        onMouseEnter={() => set(true)}
        onMouseLeave={() => set(false)}
        onClick={() => set(!flag)}
        style={{ ...props }}
        className="checkout-rigth-checkout"
      >
        {flag ? (
          <h2 id="yourBooking">
            <span> c</span>
            <span> l </span>
            <span> o</span>
            <span> s </span>
            <span> e </span>
          </h2>
        ) : (
          <h2 id="yourBooking">
            <span> r</span>
            <span> e </span>
            <span> s </span>
            <span> e </span>
            <span> r </span>
            <span> v </span>
            <span> a </span>
            <span> t </span>
            <span> i </span>
            <span> o </span>
            <span> n </span>
          </h2>
        )}

        <animated.div
          style={{
            transition: "0.5s ease",
            opacity: flag ? "1" : "0",
            transform: flag ? "scale(1)" : "scale(0)",
          }}
        >
          <div className="checkout--containers">
            <h3>Tour name</h3>
            <h2>{tours_selected.addedItems.tour_name}</h2>
          </div>
          <div className="checkout--containers-display-flex">
            <div>
              <h3>Number of days</h3>
              <h2>{tours_selected.addedItems.number_days}</h2>
            </div>
            <div>
              <h3>Number of people</h3>
              <h2>{tours_selected.addedItems.number_people}</h2>
            </div>
          </div>
          <div className="checkout--containers">
            <h3>Total Price</h3>
            <h2 id="checkout-price">{tours_selected.addedItems.price}</h2>
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
}
