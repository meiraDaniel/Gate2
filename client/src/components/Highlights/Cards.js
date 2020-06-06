import React,{useContext} from 'react'
import "./Cards.scss"
import beach from '../../images/summer.jpg'
import cabin from '../../images/cabinCold.jpg'
import { MyContext } from "../../Context/Context";

export default function Card({destination,i}){

    const { isSummer} = useContext(MyContext);

    return(
    
    <div className={isSummer?"card--main-summer":"card--main-winter"} key={i}>
    <img src={isSummer?beach:cabin} alt=""/>
    <div className="card--center--content">
    <h1>{destination.place}</h1>
    <div className="card--bottom-price">
        <p>price per day</p>
    <h3>{destination.pricePerDay}$</h3>
    </div>
    </div>
    <button className={isSummer?"button--small-summer":"button--small-winter"}>BUY NOW</button>
  </div>
  )
}