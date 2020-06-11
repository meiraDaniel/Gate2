import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../Context/Context";
import "./Highlights.scss"
import Card from './Cards'

function Highlights() {
  const { isSummer,tours} = useContext(MyContext);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    const newData = tours.tours.filter((e) => e.sale).sort(() => Math.random() - 0.5);
    setSelectedData(newData.slice(0, 3));
  }, [tours]);

  return (
    <div className="highlights--main">
      <div className={isSummer?"highlights--left-box-summer":"highlights--left-box-winter"}></div>
      <div className="highlights--right-cards">
      {selectedData.map((destination,i) => (
      <Card key={i} destination={destination} i={i}/>
      ))}
      </div>
    </div>
  );
}
export default Highlights;
