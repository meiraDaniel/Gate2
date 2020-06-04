import React, { useState,useContext,useEffect } from "react";
import { dataSummer, dataWinter } from "../../data";
import { MyContext } from "../../Context/Context";

function Filter() {
   const { isSummer, dispatch } = useContext(MyContext);
  const [data, setData] = useState([]);
  
  useEffect(() => {
      setData(isSummer ? dataSummer : dataWinter);
    },
    []);

  return (
    <div>
       <select name="place" id="place">
        <option value="none">Place</option>
        {data.map((e) => (
          <option value={e.place}>{e.place}</option>
        ))}
      </select>
      <select name="place" id="place">
        <option value="none">Activities</option>
        {data.map((e) => (
          <option value={e.activities}>{e.activities}</option>
        ))}
      </select>
      <button>Select</button> 
    </div>
  );
}

export default Filter;
