import React, { useContext, useState, useEffect } from 'react'

import { MyContext } from "../../Context/Context"

import axios from 'axios'

import PlaceCards from '../../components/Cards/PlaceCards'
import SearchForm from '../../components/Forms/SearchForm'

import './Destinations.scss'


function Destination() {

    const { isSummer} = useContext(MyContext);

    const [inputPlace, setInputPlace] = useState('');
    const [places, setPlaces] = useState([])
    const [fiteredPlaces, setfiteredPlaces] = useState([])
    const [isLoading, setisLoading] = useState(false)
    
    const [minRange, setMinRange] = useState(0)
    const [maxRange, setMaxRange] = useState(0)

    const [lowPrice, setLowPrice] = useState(0)
    const [highPrice, setHighPrice] = useState(0)

    // const []

    function handleChangeInput(e) {         
        setInputPlace(e.target.value)            
    }

    const handleChangeValues = (values) => {
        setLowPrice(values[0])
        setHighPrice(values[1])        
    }

    useEffect(() => {
        setisLoading(false);
        const fetchPlaces = async () =>{
          const res = await axios.get('/places', {params: {isSummer}});

          const places_tours = res.data.tours;

          const prices = places_tours.map(data => data.price)

          places_tours.forEach((data) => {
              data.activities = data.activities.toLowerCase().split(',');
              data.highlightsActivities = data.activities.sort(() => 0.5 - Math.random()).slice(0, 3);
            });

          setPlaces(places_tours);
          setfiteredPlaces(places_tours);

          setLowPrice(Math.trunc(Math.min(...prices)));
          setHighPrice(Math.max(...prices));

          setMinRange(Math.trunc(Math.min(...prices)));
          setMaxRange(Math.max(...prices));

          setisLoading(true)

           
        }
    
        fetchPlaces();
        setInputPlace('')
    }, [isSummer])


    useEffect(() => {
        const filter_tourNames = places.filter(data => data.tour_name.toLowerCase().includes(inputPlace.toLowerCase()));
        const filter_activity = places.filter(data => data.activities.toString().includes(inputPlace.toLowerCase()));

        const filter_places = filter_tourNames.concat(filter_activity.filter((item) => filter_tourNames.indexOf(item) < 0))

        setfiteredPlaces(filter_places) 
    }, [inputPlace, lowPrice, highPrice])

<se
    return (
        <div className='destination-container'>
            <div className='destination-container__flexBox'>
                <SearchForm handleChangeInput={handleChangeInput} inputValue={inputPlace} 
                rangeMin={minRange} 
                rangeMax={maxRange} 
                lowPrice={lowPrice}
                highPrice={highPrice}
                handleChangeValues={handleChangeValues}
                isLoading={isLoading}/>
                <div className='destination-container__flexBox_right'>
                    <div className='destination-container_highlights'>
                        <button className='highlights'><span>Highlths</span></button>
                        <button className='highlights'>Highlths</button>
                        <button className='highlights'>Highlths</button>
                    </div>
                    <div className='destination-container__placecards'>
                        {fiteredPlaces.map((data) => {
                            return <PlaceCards key={data.id}
                                                title={data.tour_name}
                                                activities={data.highlightsActivities}
                                                numberPeople={data.number_people}
                                                price={data.price}
                                                numberDays={data.number_days}
                                                isLoading={isLoading}/>
                        })}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Destination;