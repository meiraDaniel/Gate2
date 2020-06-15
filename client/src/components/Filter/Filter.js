import React, { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import "./Filter.scss";

function Filter() {

  const { isSummer, setDestinations,tours} = useContext(MyContext);

  const [place, setPlace] = useState();
  const [activities, setActivities] = useState();
  const [allPlaces, setAllPlaces] = useState([]);
  const [allActivities, setAllActivities] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const places = [];
    tours.tours.forEach((item) => places.push(item.place.split(',')[0]));
    setAllPlaces(places.filter((v, i) => places.indexOf(v) === i));
  }, [tours.tours]);

  useEffect(() => {
    const activitie = [];
    tours.tours.forEach((data) => {
     data.activities.split(',').forEach(e=>activitie.push(e))
   })
   setAllActivities(activitie.filter((v, i) => activitie.indexOf(v) === i))
  }, [tours.tours]);

  /**
   * @function handleOnClick
   * @return - dispatch an array of objects filtering  values selected by the user
   */
  const handleOnClick = () => {

      console.log(`${activities}`)
      

    if (activities && place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: `${place}`
        
    
      });

    if (!activities && place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: `${place}`
      });
    if (activities && !place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: `${activities}`
      });

    if (!activities && !place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: ''
      });

    history.push('./destinations');
    
}

  return (
    <main className="filter--main--top-summer">
    <div  className={isSummer?"filter--wrapSelect-summer":"filter--wrapSelect-winter"} >
      <select
      
        onChange={(e) => setPlace(e.target.value)}
        name="place"
        id="place"
      >
        <option value="">Place</option>
        {allPlaces.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setActivities(e.target.value)}
        name="place"
        id="place"
      >
        <option value="" >Activities</option>
        {allActivities.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
      <button onClick={handleOnClick}>Select</button>
    </div>
    </main>
  );
}

export default Filter;
