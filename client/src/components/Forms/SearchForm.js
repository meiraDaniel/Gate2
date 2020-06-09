import React, {useState} from 'react'

import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import './Form.scss'

import loupeIcon from '../../icons/loupe.svg'

function SearchForm(props) {
    const [travel, setTravel] = useState(false)

    function handleToggleTravel() {
        setTravel(!travel);
    }

    function log(value) {
        console.log(value);
      }

    return (
        <div className='search-form'>
            <h1 className='search-form__title'>Search</h1>
            <div className='search-form__inputs'>
                <div className='search-form__searchInput'>
                    <input value={props.value} onChange={props.handleChangeInput}/>
                    <img src={loupeIcon}/>
                </div>
                <div className='search-form__dateTravel'>
                    <button onClick={handleToggleTravel}><span>When to travel</span></button>
                    <ul className={travel ? 'search-form__dateTravel__activated' : 'search-form__dateTravel__notActivated'}>
                        <li><button><span>Teste</span></button></li>
                    </ul>
                </div>
                <div className='search-form__price'>
                    <div className='search-form__priceLabel'>
                        <span>$50</span>
                        <span>$150</span>
                    </div>
                    <div className='search-form__priceSlider'>
                        <Range min={-10} step={10} onChange={log} defaultValue={[20, 40]} allowCross={false} pushable/>
                    </div>
                                        
                </div>
            </div>
        </div>
    );
}

export default SearchForm;