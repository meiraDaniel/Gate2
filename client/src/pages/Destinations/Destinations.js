import React, { useState, useEffect } from 'react';

import PlaceCards from '../../components/Cards/PlaceCards'
import SearchForm from '../../components/Forms/SearchForm'

import './Destinations.scss'


const places = ['bh', 'jupter', 'tiranossouro']

function Destination(props) {

    const [inputPlace, setInputPlace] = useState('');
    const [placesCards, setPlacesCards] = useState(places)

    function handleChangeInput(e) {         
        setInputPlace(e.target.value)            
    }

    useEffect(() => {
        const filter_places = places.filter(data => data.includes(inputPlace));
        setPlacesCards(filter_places)        
    }, [inputPlace])

    return (
        <div className='destination-container__flexBox'>
            <SearchForm handleChangeInput={handleChangeInput} inputValue={inputPlace}/>
            <div className='destination-container__flexBox_right'>
                <div className='destination-container_highlights'>
                    <button className='highlights'><span>Highlths</span></button>
                    <button className='highlights'>Highlths</button>
                    <button className='highlights'>Highlths</button>
                </div>
                <div className='destination-container__placecards'>
                    {placesCards.map(() => {
                        return <PlaceCards/>
                    })}
                </div>
            </div>


        </div>
    );
}

export default Destination;