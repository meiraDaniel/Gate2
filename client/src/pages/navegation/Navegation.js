import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navegation.scss";
import { dataSummer, dataWinter } from "../../data";
import { MyContext } from "../../Context/Context";

function LandingPage({ toogleSummer }) {
  
    const [link, setLink] = useState("");
  const { isSummer, dispatch } = useContext(MyContext);
  const [data, setData] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
      setData(isSummer ? dataSummer : dataWinter);
    },
    []);
 
    const handleOnMouseEnter = (session) => {
    setLink(session);
  };
 
  const handlerPlace = (place) => {
    history.push(`/destination/${place}`);
  };
 
  const handlerActivities = (activitie) => {
    history.push(`/activities/${activitie}`);
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
        {link === "destination" ? (
          <div>
            {data.map((e) => (
              <h3 onClick={() => handlerPlace(e.place)}>{e.place}</h3>
            ))}
          </div>
        ) : null}
        {link === "activities" ? (
          <div>
            {data.map((e) => (
              <h3 onClick={() => handlerActivities(e.activities)}>
                {e.activities}
              </h3>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default LandingPage;
