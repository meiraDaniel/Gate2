import React from 'react'

import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import './Form.scss'

function SliderForm({rangeMin, rangeMax, lowPrice, highPrice, handleChange}) {
    return (
        <div className='search-form__containerSlider'>
            <div className='search-form__labelsSlider'>
                <span>${lowPrice}</span>
                <span>${highPrice}</span>
            </div>
            <div className='search-form__slider'>
                <Range  min={rangeMin} 
                        max={rangeMax} 
                        defaultValue={[lowPrice, highPrice]} 
                        onAfterChange={(values) => handleChange(values)} 
                        allowCross={false} 
                        pushable/>
            </div>
        </div>
    )
}

export default SliderForm
