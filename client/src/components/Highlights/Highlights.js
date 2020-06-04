import React, { useState, useContext, useEffect } from "react";
import { dataSummer, dataWinter } from "../../data";
import { MyContext } from "../../Context/Context";

function Highlights() {
  const { isSummer, dispatch } = useContext(MyContext);
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
    <div>
      {selectedData.map((destination) => (
        <div>
          <h1>{destination.place}</h1>
          <h2>{destination.activities}</h2>
          <h3>{destination.pricePerDay}</h3>
        </div>
      ))}
    </div>
  );
}
export default Highlights;
