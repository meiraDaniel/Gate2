import React, { useState,useContext,useEffect } from "react";
import { dataSummer, dataWinter } from "../../data";
import { MyContext } from "../../Context/Context";

function Filter() {
   const { isSummer, dispatch } = useContext(MyContext);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState();
  const [place, setPlace] = useState();
  const [activities, setActivities] = useState();

  useEffect(() => {
      setData(isSummer ? dataSummer : dataWinter);
    },
    []);

    const handleOnClick=()=>{
      if(activities && place)  setSelectedData(data.filter(e=> e.activities===activities&&e.place===place))
      if(!activities && place)  setSelectedData(data.filter(e=> e.place===place))
      if(activities && !place)  setSelectedData(data.filter(e=> e.activities===activities))
      if(!activities && !place)  setSelectedData(data)
    }
     
   
  return (
    <div>
       <select onChange={(e)=>setPlace(e.target.value)} name="place" id="place">
        <option value="none">Place</option>
        {data.map((e,i) => (
          <option  key={i} value={e.place}>{e.place}</option>
        ))}
      </select>
      <select onChange={(e)=>setActivities(e.target.value)} name="place" id="place">
        <option value="none">Activities</option>
        {data.map((e,i) => (
          <option key={i} value={e.activities}>{e.activities}</option>
        ))}
      </select>
      <button onClick={handleOnClick}>Select</button> 
    </div>
  );
}

export default Filter;
