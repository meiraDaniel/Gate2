import React, { useState,useContext} from "react";
import { client } from "../../data";
import Carrosel from "../Carrossel/Carrossel"
import "./Clients.scss"
import { MyContext } from "../../Context/Context";
import useInterval from   'react-useinterval'

function Clients() {
  const [data] = useState(client);
  const [currentInd,setCurrentInd]= useState(0)
  const { isSummer} = useContext(MyContext);

/**
  * @function previousSlide
  * @return set the index value to [...current index] +1 in loop
  */

const nextSlide=()=>{
  setCurrentInd(state=>(state+1)%data.length)

}
useInterval(nextSlide,5000)



  return (
    <div  className={isSummer?"clients--main-summer":"clients--main-winter"}>
      <div   className={isSummer?"clients--center-carrossel-summer":"clients--center-carrossel-winter"}>
     
     <Carrosel  data={data[currentInd]}  />
  </div>
    </div>
  );
}
export default Clients;
