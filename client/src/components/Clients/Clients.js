import React, { useState,useContext} from "react";
import { client } from "../../data";
import Carrosel from "../Carrossel/Carrossel"
import Arrow from "../Carrossel/Arrow"
import "./Clients.scss"
import { MyContext } from "../../Context/Context";

function Clients() {
  const [data] = useState(client);
  const [currentInd,setCurrentInd]= useState(0)
  const { isSummer} = useContext(MyContext);

 /**
  * @function previousSlide
  * @return set the index value to [...current index]  -1
  */
 

  const previousSlide=()=>{
    if(currentInd<=data.length) setCurrentInd(data.length-1);
    else  setCurrentInd(currentInd - 1)
}

/**
  * @function previousSlide
  * @return set the index value to [...current index] +1
  */
const nextSlide=()=>{
 
    if(currentInd>=data.length-1) setCurrentInd(0);
     else  setCurrentInd(currentInd + 1)
}


  return (
    <div className={isSummer?"clients--main-summer":"clients--main-winter"}>
      < div className={isSummer?"clients--center-carrossel-summer":"clients--center-carrossel-winter"}>
        <Arrow
          direction="left"
          clickFunction={ previousSlide }
          glyph="&#8678;" />
     <Carrosel data={data[currentInd]}  />
     <Arrow
          direction="rigth"
          clickFunction={ nextSlide }
          glyph="&#8680;" />
    </div>
    </div>
  );
}
export default Clients;
