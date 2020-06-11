import React,{useContext} from 'react'
import "./Cards.scss"
import beach from '../../images/summer.jpg'
import cabin from '../../images/cabinCold.jpg'
import { MyContext } from "../../Context/Context";

export default function Card({destination,i}){

    const { isSummer} = useContext(MyContext);

    return(
    
    <div className={isSummer?"card--main-summer":"card--main-winter"} key={i}>
      <div className="saleCard"><p>ON SALE</p></div>
    <img src={isSummer?beach:cabin} alt=""/>
    <div className="card--center--content">
    <h1>{destination.tour_name}</h1>
    <div className="card-top-info">
    <p>people:<span className="black">{destination.number_people}</span></p>
    <p>days:<span  className="black">{destination.number_days}</span></p>
    </div>
    <div className="card--bottom-price">
        <p>price</p>
    <h3>{destination.price}$</h3>
    </div>
    </div>
    <button className={isSummer?"button--small-summer":"button--small-winter"}>BUY NOW</button>
  </div>
  )
}