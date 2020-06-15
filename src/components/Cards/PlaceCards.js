import React, { useEffect,useContext } from 'react';
import { MyContext } from "../../Context/Context";
import summerImg from '../../images/summer.jpg'
import './Cards.scss'
import {useHistory} from "react-router-dom";

function PlaceCards({title, activities, numberPeople, price, numberDays,data}) {
    const { setTours_selected} = useContext(MyContext);
const history =useHistory()

    const handleOnClick=()=>{
        setTours_selected({
          type: "BUY",
          selected: data,
        })
        history.push("/checkout")
      }

    return (
        <div className='place-card'>
            <div className='place-card__img'>
                <img src={summerImg} alt='' />
            </div>
            <div className='place-card__content'>
                <button  onClick={handleOnClick} className='button--big'>buy me</button>
                <h1 className='place-card__title'>{title}</h1>
                <div className='place-card__line'></div>
                <ul className='place-card__text'>
                    {activities.map((data, index) => {
                        return <li key={index}>{data}</li>
                    })}

                </ul>
                <div className='place-card__botom'>
                    <p className='place-card__botomQtdPeople'>{numberPeople} <span>Peoples</span></p>
                    <p className='place-card__botomQtdDays'>{numberDays} days</p>
                    <p>${price}</p>
                </div>
            </div>
            

        </div>
    );
}

export default PlaceCards;