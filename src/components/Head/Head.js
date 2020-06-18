import React,{useContext} from 'react'
import {MyContext} from '../../Context/Context'
import './Head.scss'
const Head = props => {
    const {isSummer}= useContext(MyContext)

    return (
        <div className={isSummer?"head--main--summer":"head--main--winter"}>
            <div className="head--container">
              
            </div>
        </div>
    )
}


export default Head
