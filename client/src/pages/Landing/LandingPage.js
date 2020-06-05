import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import beach from "../../images/backgroundSummer.jpg";
import cabin from "../../images/cabinCold.jpg";
import "./LandingPage.scss";

const pages = [beach, cabin];

function LandingPage({ togleSummer }) {
    const index =useRef(0)
  const [animating, setAnimating] = useState(false);
  const [{ x }, set] = useSpring(() => ({
    x: [0, 0]
  }));

  const bind= useDrag(({movement:[mx]})=>{
    let moveX= (mx/window.innerHeight)*100

    set({
        x:[moveX,0]
    })
  })
  return (
    <animated.div {...bind()} className="landing--main" >
      {pages.map((e,i) => (
          <div className='testdiv'>
        <animated.div  style={{transform:x.interpolate(value =>`translate3d(${value}%,0px,0px)`), backgroundImage:`url(${pages[i]})`}} > 
          {i===0? <button className='landing--button' onClick={()=>{togleSummer(true)}}>Summer</button>: <button  className='landing--button' onClick={()=>togleSummer(false)}>Winter</button>}
        </animated.div>
        </div>
      ))}
    </animated.div>
  );
}

export default LandingPage;
