import React, { useState,useContext, useEffect,useCallback} from "react";
import Carrosel from "../Carrossel/Carrossel"
import "./Clients.scss"
import { MyContext } from "../../Context/Context";
import useInterval from   'react-useinterval'
import axios from 'axios'

function Clients() {
  const [data,setData] = useState([]);
  const [currentInd,setCurrentInd]= useState(0)
  const { isSummer} = useContext(MyContext);

/**
  * @function previousSlide
  * @return set the index value to [...current index] +1 in loop
  */


const handlerData = useCallback(()=>{
  axios.get("/clients",{params:{isSummer}}).then(res=>setData(res.data.clients)).catch(err=> console.log(err))
 },[isSummer])

 useEffect(()=>{
  handlerData()
},[handlerData])

const nextSlide=()=>{
  setCurrentInd(state=>(state+1)%data.length)

}
useInterval(nextSlide,5000)



  return (
    <div  className={isSummer?"clients--main-summer":"clients--main-winter"}>
     <div   className={isSummer?"clients--center-carrossel-summer":"clients--center-carrossel-winter"}>
     
   {data[currentInd]? <Carrosel  data={data[currentInd]}  />:null }
  </div>
    </div>
  );
}
export default Clients;
