import React,{useContext} from 'react'
import {MyContext} from '../../Context/Context'
import './Head.scss'
const Head = props => {
    const {isSummer}= useContext(MyContext)

    return (
        <div className={isSummer?"head--main--summer":"head--main--winter"}>
            <div className="head--container">
                <div className="head--center-content">
                <h2 className={isSummer?"head--top-title-summer":"head--top-title-winter"}>Welcome to </h2>
                <div className="head--center-title">
                    <h1>New Zealand</h1>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Head
