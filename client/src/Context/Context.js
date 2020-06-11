import React, {createContext,useReducer,useEffect} from 'react'
import {SeasonReducer,userDestinations,getData} from "../Reducer/reducer"

export const MyContext = createContext()


export const Provider  = props =>{
    const[isSummer,setIsSummer] =useReducer(SeasonReducer,[] ,()=>{
        const localData = localStorage.getItem('isSummer');
        return localData ? JSON.parse(localData) : []; 
    } );
    const[destinations,setDestinations] =useReducer(userDestinations,[]);
   
    const [tours,setTours] =useReducer(getData,[],()=>{
        const localData = localStorage.getItem('tours');
        return localData ? JSON.parse(localData) : [];   
    })

    useEffect(()=>{
        localStorage.setItem("isSummer", JSON.stringify(isSummer))
    },[isSummer])
    
    useEffect(()=>{
        localStorage.setItem("tours", JSON.stringify(tours))
    },[tours])
    
return(
        <MyContext.Provider  value={{isSummer,setIsSummer,destinations,setDestinations,setTours,tours}}>
            {props.children}
        </MyContext.Provider>

    )
} 