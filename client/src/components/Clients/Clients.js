import React, { useState} from "react";
import { client } from "../../data";
import Carrosel from "../Carrossel/Carrossel"
import Arrow from "../Carrossel/Arrow"

function Clients() {
  const [data] = useState(client.sort(() => Math.random() - 0.5));
  const [currentInd,setCurrentInd]= useState(0)

 /**
  * @function previousSlide
  * @return set the index value to [...current index]  -1
  */
 

  const previousSlide=()=>{
    const lastIndex =data.length-1
    const shouldResetIndex = setCurrentInd(0);
    const index =  shouldResetIndex ? lastIndex : currentInd - 1;


    setCurrentInd(index)
}

/**
  * @function previousSlide
  * @return set the index value to [...current index] +1
  */
const nextSlide=()=>{
    const lastIndex =data.length-1
    const shouldResetIndex = setCurrentInd(0);
    const index =  shouldResetIndex ? lastIndex : currentInd + 1;


    setCurrentInd(index)
}

  return (
    <div>
        <Arrow
          direction="left"
          clickFunction={ previousSlide }
          glyph="&#8592;" />
     <Carrosel data={data[currentInd]}  />
     <Arrow
          direction="left"
          clickFunction={ nextSlide }
          glyph="&#8594;" />
    </div>
  );
}
export default Clients;
