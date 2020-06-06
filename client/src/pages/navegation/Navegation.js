import React, { useState, useEffect, useContext } from "react";
import { NavLink} from "react-router-dom";
import "./Navegation.scss";
import { dataSummer, dataWinter } from "../../data";
import { MyContext } from "../../Context/Context";
import logo from '../../images/logo.png'
import icon from '../../images/boat.svg'

function LandingPage({ toogleSummer }) {
  
    const [link, setLink] = useState("");
  const { isSummer,setDestinations} = useContext(MyContext);

  const [data, setData] = useState([]);
  const [allPlaces,setAllPlaces] =useState([])
const [allActivities,setAllActivities] =useState([])
const[flag,set] =useState(false)

  useEffect(() => {
      setData(isSummer ? dataSummer : dataWinter);
    },
    [isSummer]);

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

    /**
     * @function handleOnMouseEnter
     * @param {string} session  - activities or destination
     * @returns - open an menu with the links
     */
    const handleOnMouseEnter = (session) => {
    setLink(session);
    set(true)
  };

  /**
   * @function handlePlace
   * @param {string} selectedPlace 
   * @returns an array of ojects with filtered by the selected  place 
   */
 
  const handlePlace = (selectedPlace) => {
    setDestinations({type:'SELECTED_DESTINATIONS',destinations:data.filter(e=>e.place===selectedPlace)})
  };
   /**
   * @function handleActivities
   * @param {string} selectedActivity 
   * @returns an array of ojects with filtered by the selected ativity 
   */
 
 
  const handleActivities = (selectedActivity) => {
    setDestinations({type:'SELECTED_DESTINATIONS',destinations:data.filter(e=>e.activities===selectedActivity)})

  };

  return (
    <main onMouseLeave={()=>set(false)} className="navegation--main">
      <nav>
        <img src={logo} alt=""  onMouseEnter={() =>set(false)} onClick={()=>set(false)}/>
        <div className="navegation--rigth-link">
        <h3  className={isSummer?"navegation--links-summer":"navegation--links-winter"} onMouseEnter={() => handleOnMouseEnter("destination")}>
          {" "}
          Destinations |{" "} 
        </h3> 
        <h3 className={isSummer?"navegation--links-summer":"navegation--links-winter"}  onMouseEnter={() => handleOnMouseEnter("activities")}>
          {" "}
           Activities |{" "}
        </h3>
        <NavLink className={isSummer?"navegation--links-summer":"navegation--links-winter"} to="/aboutus"> About us |</NavLink>
        <NavLink className={isSummer?"navegation--links-summer":"navegation--links-winter"}  to="/contact"> Contact </NavLink>
        </div>
      </nav>
     { flag? <section className={isSummer?"navegation--center-overlay-summer":"navegation--center-overlay-winter"} >
        <div className="navegation--center-opendiv-summer">
        
        {link === "destination"? 
         <div>
            {allPlaces.map((e,i) => (
              <div className="navegation--center-links">
              <img src={icon} alt="ship"/>
              <h3  key={i} onClick={() => handlePlace(e)}>{e}</h3>
              </div>
            ))}</div>
                : link === "activities" ? 
                <div>       
            {allActivities.map((e,i) => (
              <div className="navegation--center-links">
              <img src={icon} alt="ship"/>
              <h3 key={i} onClick={() => handleActivities(e)}>
                {e}
              </h3>
              </div>
            ))}</div>
          :null}
      
        </div>
      </section>:null}
    </main>
  );
}

export default LandingPage;
