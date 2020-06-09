import React from 'react';

import summerImg from '../../images/summer.jpg'
import './Cards.scss'

function PlaceCards(props) {
    return (
        <div className='place-card'>
            <div className='place-card__img'>
                <img src={summerImg} alt='' />
            </div>
            <div className='place-card__content'>
                <button className='button--big'>buy me</button>
                <h1 className='place-card__title'>Place</h1>
                <div className='place-card__line'></div>
                <p className='place-card__text'>Loren Ipsura sdkalda daksldak dasd asd asd ad asdasdadsa dasd das dasd asd adasdsadasd dsa</p>
                <div className='place-card__botom'>
                    <p className='place-card__botomQtdPeople'>50 <span>Peoples</span></p>
                    <p className='place-card__botomQtdDays'>5 days</p>
                    <p>$150</p>
                </div>
            </div>
            

        </div>
    );
}

export default PlaceCards;