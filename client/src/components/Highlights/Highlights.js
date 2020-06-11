import React, { useState, useContext, useEffect } from "react";
import { dataSummer, dataWinter } from "../../data";
import { MyContext } from "../../Context/Context";
import "./Highlights.scss"
import Card from './Cards'

function Highlights() {
  const { isSummer} = useContext(MyContext);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    setData(isSummer ? dataSummer : dataWinter);
  }, [isSummer]);
  useEffect(() => {
    const newData = data.filter((e) => e.sale).sort(() => Math.random() - 0.5);
    setSelectedData(newData.slice(0, 3));
  }, [data]);

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
