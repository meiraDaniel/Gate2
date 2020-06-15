import React, { useContext, useState, useEffect } from 'react'

import { MyContext } from "../../Context/Context"

import axios from 'axios'

import PlaceCards from '../../components/Cards/PlaceCards'
import SearchForm from '../../components/Forms/SearchForm'

import './Destinations.scss'


function Destination() {

    const { isSummer, destinations, setDestinations } = useContext(MyContext);

    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [startedValue, setStartedValue] = useState('');

    const [isLoading, setIsLoading] = useState(true);

   
    useEffect(() => {
        
        const fetchPlaces = async () => {

            setIsLoading(true);

            const res = await axios.get('/places', {params: {isSummer}});

            const places_tours = res.data.tours;

            places_tours.forEach((data) => {
                data.activities = data.activities.toLowerCase().split(',');
                data.highlights_activities = data.activities.sort(() => 0.5 - Math.random()).slice(0, 3);
            });

            setPlaces(places_tours);
            setFilteredPlaces(places_tours);

            setIsLoading(false);
         
        }
    
        fetchPlaces();
    }, [isSummer])


    const handleFilter = (filter_places) => {
        setFilteredPlaces(filter_places) 
    }

    return (
        <div className='destination-container'>
            <div className='destination-container__flexBox'>
                <SearchForm places={places}
                            filter_places={filteredPlaces}
                            handleFilter={handleFilter}
                            isLoading={isLoading}
                />
                <div className='destination-container__flexBox_right'>
                    <div className='destination-container__placecards'>
                        {filteredPlaces.map((data) => {
                            return <PlaceCards key={data.id}
                                                title={data.tour_name}
                                                activities={data.highlights_activities}
                                                numberPeople={data.number_people}
                                                price={data.price}
                                                numberDays={data.number_days}/>
                        })}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Destination;