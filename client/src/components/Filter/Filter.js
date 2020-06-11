import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../Context/Context";
import "./Filter.scss";

function Filter() {

  const { isSummer, setDestinations,tours,destinations} = useContext(MyContext);

  const [place, setPlace] = useState();
  const [activities, setActivities] = useState();
  const [allPlaces, setAllPlaces] = useState([]);
  const [allActivities, setAllActivities] = useState([]);

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


      if (activities && place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: tours.tours.filter(
          (e) => e.activities.includes(`${activities}`) && e.place.includes(`${place}, New Zealand`))
        
    
      });
    if (!activities && place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: tours.tours.filter(e=>e.place.includes(`${place}, New Zealand`))
      });
    if (activities && !place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: tours.tours.filter((e) => e.activities.includes(`${activities}`))
      });
    if (!activities && !place)
      setDestinations({ type: "SELECTED_DESTINATIONS", destinations: tours.tours })
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
