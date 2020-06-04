import React, {createContext,useState,useReducer,useEffect} from 'react'
import {SeasonReducer} from "../Reducer/reducer"

export const MyContext = createContext()


export const Provider  = props =>{
    const[isSummer,dispatch] =useReducer(SeasonReducer,[] ,()=>{
        const localData = localStorage.getItem('isSummer');
        return localData ? JSON.parse(localData) : []; 
    } );


    useEffect(()=>{
    localStorage.setItem("isSummer", JSON.stringify(isSummer))
    },[isSummer])

    
return(
        <MyContext.Provider  value={{isSummer,dispatch}}>
            {props.children}
        </MyContext.Provider>

    )
} 