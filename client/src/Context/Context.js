import React, {createContext,useReducer,useEffect} from 'react'
import {SeasonReducer,userDestinations} from "../Reducer/reducer"

export const MyContext = createContext()


export const Provider  = props =>{
    const[isSummer,setIsSummer] =useReducer(SeasonReducer,[] ,()=>{
        const localData = localStorage.getItem('isSummer');
        return localData ? JSON.parse(localData) : []; 
    } );
    const[destinations,setDestinations] =useReducer(userDestinations,[]);


    useEffect(()=>{
        localStorage.setItem("isSummer", JSON.stringify(isSummer))
    },[isSummer])

    
return(
        <MyContext.Provider  value={{isSummer,setIsSummer,destinations,setDestinations}}>
            {props.children}
        </MyContext.Provider>

    )
} 