import React from 'react'

import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import './Form.scss'

function SliderForm({rangeMin, rangeMax, lowValue, highValue, handleChange, decorator}) {

    return (
        <div className='search-form__containerSlider'>
            <div className='search-form__labelsSlider'>
                <span className={decorator}>{lowValue}</span>
                <span className={decorator}>{highValue}</span>
            </div>
            <div className='search-form__slider'>
                <Range  min={rangeMin} 
                        max={rangeMax} 
                        defaultValue={[lowValue, highValue]} 
                        onAfterChange={(values) => handleChange(values)} 
                        allowCross={false} 
                        pushable/>
            </div>
        </div>
    )
}

export default SliderForm
