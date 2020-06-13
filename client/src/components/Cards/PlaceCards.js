import React, { useEffect } from 'react';

import summerImg from '../../images/summer.jpg'
import './Cards.scss'

function PlaceCards({title, activities, numberPeople, price, numberDays}) {



    return (
        <div className='place-card'>
            <div className='place-card__img'>
                <img src={summerImg} alt='' />
            </div>
            <div className='place-card__content'>
                <button className='button--big'>buy me</button>
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