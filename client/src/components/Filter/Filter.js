import React, { useState, useContext, useEffect } from "react";
import { dataSummer, dataWinter } from "../../data";
import { MyContext } from "../../Context/Context";
import "./Filter.scss";

function Filter() {

  const { isSummer, setDestinations } = useContext(MyContext);
  const [data, setData] = useState([]);
  const [place, setPlace] = useState();
  const [activities, setActivities] = useState();
  const [allPlaces, setAllPlaces] = useState([]);
  const [allActivities, setAllActivities] = useState([]);

  useEffect(() => {
    setData(isSummer ? dataSummer : dataWinter);
  }, [isSummer]);

  useEffect(() => {
    const places = [];
    data.forEach((item) => places.push(item.place));
    setAllPlaces(places.filter((v, i) => places.indexOf(v) === i));
  }, [data]);
  useEffect(() => {
    const activities = [];

    data.forEach((item) => activities.push(item.activities));
    setAllActivities(activities.filter((v, i) => activities.indexOf(v) === i));
  }, [data]);

  /**
   * @function handleOnClick
   * @return - dispatch an array of objects filtering  values selected by the user
   */
  const handleOnClick = () => {
    if (activities && place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: data.filter(
          (e) => e.activities === activities && e.place === place
        ),
      });
    if (!activities && place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: data.filter((e) => e.place === place),
      });
    if (activities && !place)
      setDestinations({
        type: "SELECTED_DESTINATIONS",
        destinations: data.filter((e) => e.activities === activities),
      });
    if (!activities && !place)
      setDestinations({ type: "SELECTED_DESTINATIONS", destinations: data });
  };

  return (
    <main className="filter--main--top-summer">
    <div  className={isSummer?"filter--wrapSelect-summer":"filter--wrapSelect-winter"} >
      <select
      
        onChange={(e) => setPlace(e.target.value)}
        name="place"
        id="place"
      >
        <option value="none">Place</option>
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
        <option value="none">Activities</option>
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
