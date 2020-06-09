import React, { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import beach from "../../images/ladingpageback.jpg";
import cabin from "../../images/cabinCold.jpg";
import "./LandingPage.scss";
import { MyContext } from "../../Context/Context";
import useInterval from   'react-useinterval'

const pages = [beach, cabin];

function LandingPage({ togleSummer }) {
  const { isSummer } = useContext(MyContext);
const [flag,set] =useState(false)

  const { transform, opacity } = useSpring({
    opacity: flag ? 1 : 0,
    transform: `perspective(600px) rotateX(${flag ? 180 : 0}deg) scale(1)`,
    config: { mass: 5, tension: 500, friction: 100 },
  });

   useInterval(()=>set(!flag),4000)

  return (
    <div  className="landing--main" onClick={() => set(!flag)} >
    <animated.div 
      className="landing-winter"
      style={{ opacity: opacity.interpolate((o) => 1 - o),
         transform, position:'absolute',
         backgroundImage:`url(${pages[0]})`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
       }}
    >
        <button
        className="landing--button"
        onClick={() => {
          togleSummer(true);
        }}
      >
        Beach
      </button>
    </animated.div>
    <animated.div
      className="landing-summer"
      style={{
        opacity,
        transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        position:'absolute',
        backgroundImage:`url(${pages[1]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
    <button className="landing--button" onClick={() => togleSummer(false)}>
        Mountain
      </button>
    </animated.div>
  </div>

  
  );
}

export default LandingPage;
