import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";

export default function CheckoutBooking() {
  const { tours_selected } = useContext(MyContext);

  return (
    <div className="checkoutBooking--content">
   <h2>Your booking</h2>
        <div className="checkout--top-tour_name">
          <h3>Tour name</h3>
          <h2>{tours_selected.addedItems.tour_name}</h2>
        </div>
        <div className="checkout--center-days">
          <h3>Number of days</h3>
          <h2>{tours_selected.addedItems.number_days}</h2>
          <h3>Number of people</h3>
          <h2>{tours_selected.addedItems.number_people}</h2>
        </div>
        <div className="checkout--bottom-price">
          <h3>Total Price</h3>
          <h2>{tours_selected.addedItems.price}</h2>
        </div>
      </div>
        
  );
}
