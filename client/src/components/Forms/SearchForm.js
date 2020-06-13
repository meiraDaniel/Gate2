import React, {useState} from 'react'

import  { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import './Form.scss'

import SliderForm from './SliderForm'

import loupeIcon from '../../icons/loupe.svg'

function SearchForm({inputValue, handleChangeInput, rangeMin, rangeMax, handleChangePrice, highPrice, lowPrice, isLoading}) {
    const [travel] = useState(false)

/*     function handleToggleTravel() {
        setTravel(!travel);
    }
   
    const handleChangePrice = (values) => {
        // console.log(values);
        handleChangeValues(values);
    }

    useEffect(() => {}, [isLoading])
     */
    
   
    return (
        <div className='search-form'>
            <h1 className='search-form__title'>Search</h1>
            <div className='search-form__inputs'>
                <div className='search-form__searchInput'>
                    <input value={inputValue} onChange={handleChangeInput}/>
                <img src={loupeIcon} alt=""/>
                </div>
                <div className='search-form__dateTravel'>
{/*                     <button onClick={handleToggleTravel}><span>When to travel</span></button>
 */}                    <ul className={travel ? 'search-form__dateTravel__activated' : 'search-form__dateTravel__notActivated'}>
                        <li><button><span>Teste</span></button></li>
                    </ul>
                </div>
                {isLoading&&<SliderForm lowPrice={lowPrice}
                                        highPrice={highPrice}
                                        rangeMin={rangeMin}
                                        rangeMax={rangeMax}
                                        handleChange={handleChangePrice}/>}
                <div className='search-form__containerSlider'>
                    <div className='search-form__labelsSlider'>
                        <span>${lowPrice}</span>
                        <span>${highPrice}</span>
                    </div>
                    {isLoading?<div className='search-form__slider'>
                        <Range min={rangeMin} max={rangeMax} defaultValue={[lowPrice, highPrice]} onAfterChange={(values) => handleChangePrice(values)} allowCross={false} pushable/>
                    </div>:<></>}       
                </div>
            </div>
        </div>
    );
}

export default SearchForm;