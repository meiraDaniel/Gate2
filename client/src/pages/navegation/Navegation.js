import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navegation.scss";
import { dataSummer, dataWinter } from "../../data";
import { MyContext } from "../../Context/Context";

function LandingPage({ toogleSummer }) {
  
    const [link, setLink] = useState("");
  const { setSelected,isSummer,destinations,setDestinations} = useContext(MyContext);

  const [data, setData] = useState([]);
  const history = useHistory();
  const [allPlaces,setAllPlaces] =useState([])
const [allActivities,setAllActivities] =useState([])

  useEffect(() => {
      setData(isSummer ? dataSummer : dataWinter);
    },
    []);

    useEffect(() => {
      const places = []
      data.forEach((item) => places.push(item.place))
    setAllPlaces(places.filter((v, i) => places.indexOf(v) === i))
    },
    [data]);
    useEffect(() => {
      const activities = []

      data.forEach((item) => activities.push(item.activities))
      setAllActivities(activities.filter((v, i) => activities.indexOf(v) === i))},
    [data]);

    const handleOnMouseEnter = (session) => {
    setLink(session);
  };
 
  const handlerPlace = (selectedPlace) => {
    setDestinations({type:'SELECTED_DESTINATIONS',destinations:data.filter(e=>e.place===selectedPlace)})
  };
 
  const handlerActivities = (selectedActivity) => {
    setDestinations({type:'SELECTED_DESTINATIONS',destinations:data.filter(e=>e.activities===selectedActivity)})

  };

  return (
    <main>
      <nav>
        <h3 onMouseEnter={() => handleOnMouseEnter("destination")}>
          {" "}
          Destinations{" "} 
        </h3> 
        <h3 onMouseEnter={() => handleOnMouseEnter("activities")}>
          {" "}
           Activities{" "}
        </h3>
        <NavLink to="/aboutus"> About us</NavLink>
        <NavLink to="/contact"> Contact </NavLink>
      </nav>
      <section>
        {link === "destination"? data.length>0 ? (
          <div>
            {allPlaces.map((e,i) => (
              <h3  key={i} onClick={() => handlerPlace(e)}>{e}</h3>
            ))}
          </div>
        ) : <h3>Loading</h3>:null}
        {link === "activities" ? data.length>0 ? (
          <div>
            {allActivities.map((e,i) => (
              <h3 key={i} onClick={() => handlerActivities(e)}>
                {e}
              </h3>
            ))}
          </div>
        ) : <h3>Loading</h3>:null}
      </section>
    </main>
  );
}

export default LandingPage;
