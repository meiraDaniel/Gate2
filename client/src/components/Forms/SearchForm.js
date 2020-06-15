import React, { useState, useEffect, useContext } from 'react'

import { MyContext } from "../../Context/Context"

import './Form.scss'

import SliderForm from './SliderForm'

import loupeIcon from '../../icons/loupe.svg'

function SearchForm({places, filter_places, handleFilter, isLoading}) {

    const [travel, setTravel] = useState(false)
    const { destinations, setDestinations } = useContext(MyContext);

    const [inputFilterValue, setInputFilter] = useState('');
    const [startedValue, setStartedValue] = useState('');
    
    const [minRangePrice, setMinRangePrice] = useState(0)
    const [maxRangePrice, setMaxRangePrice] = useState(0)
    
    const [lowPrice, setLowPrice] = useState(0)
    const [highPrice, setHighPrice] = useState(0)

    const [minRangeDay, setMinRangeDay] = useState(0)
    const [maxRangeDay, setMaxRangeDay] = useState(0)

    const [lowDay, setLowDay] = useState(0)
    const [highDay, setHighDay] = useState(0)

    
    function handleChangeInput(e) {         
        setInputFilter(e.target.value)            
    }

    const handleChangeValues = (values) => {
        setLowPrice(values[0])
        setHighPrice(values[1])        
    }

    function handleToggleTravel() {
        setTravel(!travel);
    }
   
    const handleChangePrice = (values) => {
        setLowPrice(values[0]);
        setHighPrice(values[1]);
    }

    const handleChangeDay = (values) => {
        setLowDay(values[0]);
        setHighDay(values[1]);
    }


    const calcMinMax = (values) => {
        let min = Math.trunc(Math.min(...values));
        let max = Math.max(...values);
        return ({'min':min, 'max':max});
    }

    useEffect(() => {
        setDestinations('');
        if (places.length > 0){
            const prices = places.map(data => data.price);
            const prices_limit = calcMinMax(prices) 

            const days = places.map(data => data.number_days);
            const days_limit = calcMinMax(days) 

            setMinRangePrice(prices_limit.min);
            setMaxRangePrice(prices_limit.max);

            setHighPrice(prices_limit.max);
            setLowPrice(prices_limit.min);

            setMinRangeDay(days_limit.min);
            setMaxRangeDay(days_limit.max);

            setHighDay(days_limit.max);
            setLowDay(days_limit.min);

            setInputFilter('');
            
            
        }

        const info_sliders = places.map(data => ({'price': data.price, 'days': data.number_days}));

        
    }, [places])

    
    useEffect(() => {
        
        if (!isLoading){
            console.log(destinations);
            
            setStartedValue(destinations.destinations);

            (destinations.destinations) &&
                setDestinations({
                    type: "SELECTED_DESTINATIONS",
                    destinations: ''
                  });
        
            setInputFilter(startedValue);
        } else {
            // console.log('dsadasdas');
            setInputFilter('');
        }
    }, [destinations, isLoading])

    
    useEffect(() => {
        const filter_tourNames = places.filter(data => data.tour_name.toLowerCase().includes(inputFilterValue.toLowerCase()));
        const filter_activity = places.filter(data => data.activities.toString().includes(inputFilterValue.toLowerCase()));
        const filter_destination = places.filter(data => data.place.toLowerCase().split(',')[0].includes(inputFilterValue.toLowerCase()));

        const filter_activities_tours = filter_tourNames.concat(filter_activity.filter((item) => filter_tourNames.indexOf(item) < 0));
        const filter_inputSearch = filter_activities_tours.concat(filter_destination.filter((item) => filter_activities_tours.indexOf(item) < 0));


        const filter_places = filter_inputSearch.filter(data => data.price>=lowPrice&&data.price<=highPrice&&data.number_days>=lowDay&&data.number_days<=highDay);
        

        handleFilter(filter_places) 
    }, [inputFilterValue, lowPrice, highPrice, lowDay, highDay]) 
   
    return (
        <div className='search-form'>
            <h1 className='search-form__title'>Search</h1>
            <div className='search-form__inputs'>
                <div className='search-form__searchInput'>
                    <input value={inputFilterValue} onChange={handleChangeInput}/>
                    <img src={loupeIcon} alt=""/>
                </div>
                {!isLoading?(<>
                    <SliderForm lowValue={lowPrice}
                                highValue={highPrice}
                                rangeMin={minRangePrice}
                                rangeMax={maxRangePrice}
                                handleChange={handleChangePrice}
                                decorator={'price_decorator'}/>

                    <SliderForm lowValue={lowDay}
                                highValue={highDay}
                                rangeMin={minRangeDay}
                                rangeMax={maxRangeDay}
                                handleChange={handleChangeDay}
                                decorator={'day_decorator'}/>
                </>):<div className='search-form__containerSlider'/>}

            </div>
        </div>
    );
}

export default SearchForm;