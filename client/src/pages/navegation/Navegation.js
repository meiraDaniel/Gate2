import React, { useState, useEffect, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navegation.scss";
import { MyContext } from "../../Context/Context";
import logo from "../../images/logo.png";
import surf from "../../images/surf.svg";
import ski from "../../images/skiing.svg";
import boat from '../../images/boat.svg'

import { useSpring, animated } from "react-spring";

function Navegation({ toogleSummer }) {
  const [link, setLink] = useState("");
  const { isSummer, setDestinations, setIsSummer,tours,destinations } = useContext(MyContext);

  const [allPlaces, setAllPlaces] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [flag, set] = useState(false);

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
   setAllActivities(activitie.filter((v, i) => activitie.indexOf(v) === i).sort(() => Math.random() - 0.5).slice(0, 6))
  }, [tours.tours]);

  /**
   * @function handleOnMouseEnter
   * @param {string} session  - activities or destination
   * @returns - open an menu with the links
   */
  const handleOnMouseEnter = (session) => {
    setLink(session);
    set(true);
  };
  /**
   * @function handlePlace
   * @param {string} selectedPlace
   * @returns an array of ojects with filtered by the selected  place
   */

  const handlePlace = (selectedPlace) => {
  
    setDestinations({
      type: "SELECTED_DESTINATIONS",
      destinations: selectedPlace
    });
    set(false);    
    history.push('/destinations');
  };
  /**
   * @function handleActivities
   * @param {string} selectedActivity
   * @returns an array of ojects with filtered by the selected ativity
   */

  const handleActivities = (selectedActivity) => {
    setDestinations({
      type: "SELECTED_DESTINATIONS",
      destinations:selectedActivity
    });
    set(false)
    history.push('/destinations');
  };

  const { transform, opacity } = useSpring({
    opacity: isSummer ? 1 : 0,
    transform: `perspective(600px) rotateX(${isSummer ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const toggleSummer = () => {
    setIsSummer({ type: "CHOOSE_SEASON", isSummer: !isSummer });
  };

  return (
    <main onMouseLeave={() => set(false)}   className="navegation--main">
      <nav  className={isSummer?"nav-summer":"nav-winter"}>
        <div className="navegation-left">
          <img
            src={logo}
            alt="logo"
            id="logo"
            onMouseEnter={() => set(false)}
            onClick={() => history.push("/home")}
          />
          <div className="season" onClick={toggleSummer}>
            <animated.div 
              className="navegation-winter"
              style={{ opacity: opacity.interpolate((o) => 1 - o), transform, position:'absolute'}}
            >
              <h2 >Beach</h2>
            </animated.div>
            <animated.div
              className="navegation-summer"
              style={{
                opacity,
                transform: transform.interpolate((t) => `${t} rotateX(180deg)`), position:'absolute'
              }}
            >
              <h2>Mountain</h2>
            </animated.div>
          </div>
        </div>
        <div className="navegation--rigth-link">
          <h3
            className={
              isSummer ? "navegation--links-summer" : "navegation--links-winter"
            }
            onMouseEnter={() => handleOnMouseEnter("destination")}
            onClick={() => set(!flag)} 
          >
            {" "}
            Destinations |{" "}
          </h3>
          <h3
            className={
              isSummer ? "navegation--links-summer" : "navegation--links-winter"
            }
            onMouseEnter={() => handleOnMouseEnter("activities")}
             onClick={() => set(!flag)} 
          >
            {" "}
            Activities |{" "}
          </h3>
          <NavLink
            className={
              isSummer ? "navegation--links-summer" : "navegation--links-winter"
            }
            to="/about"
          >
            {" "}
            About us |
          </NavLink>
          <NavLink
            className={
              isSummer ? "navegation--links-summer" : "navegation--links-winter"
            }
            to="/contact"
          >
            {" "}
            Contact{" "}
          </NavLink>
        </div>
      </nav>
      <section
        className={
          flag
            ? isSummer
              ? "navegation--center-overlay-summer"
              : "navegation--center-overlay-winter"
            : "close"
        }
      >
        {flag?
        <div className="navegation--center-opendiv-summer">
          {link === "destination" ? (
            <div>
              {allPlaces.map((e, i) => (
                <div onClick={() => handlePlace(e)} key={i} className={isSummer?"navegation--center-links-summer":"navegation--center-links-winter"}>
                  <img src={boat} alt="ship" />
                  <h3 key={i} >
                    {e}
                  </h3>
                </div>
              ))}
            </div>
          ) : link === "activities" ? (
            <div>
              {allActivities.map((e, i) => (
                <div  onClick={() => handleActivities(e)}  key={i}  className={isSummer?"navegation--center-links-summer":"navegation--center-links-winter"}>
                  <img src={isSummer?surf:ski} alt="ship" />
                  <h3 key={i} >
                    {e}
                  </h3>
                </div>
              ))}
            </div>
          ) : null}
        </div>:null}
      </section>
    </main>
  );
}

export default Navegation;
