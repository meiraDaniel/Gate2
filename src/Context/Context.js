import React, {createContext,useReducer,useEffect} from 'react'
import {SeasonReducer,userDestinations,getData,handleBuy} from "../Reducer/reducer"

export const MyContext = createContext()


export const Provider  = props =>{
    const[isSummer,setIsSummer] =useReducer(SeasonReducer,[] ,()=>{
        const localData = localStorage.getItem('isSummer');
        return localData ? JSON.parse(localData) : true; 
    } );
    const[destinations,setDestinations] =useReducer(userDestinations,[],()=>{
        const localData = localStorage.getItem('destinations');
        return localData ? JSON.parse(localData) : {'destinations': []} ;})
   
    const [tours,setTours] =useReducer(getData,[],()=>{
        const localData = localStorage.getItem('tours');
        return localData ? JSON.parse(localData) : {'tours': []};   
    })

    const [tours_selected,setTours_selected] =useReducer(handleBuy,{
        cartList: [0],
        },()=>{
        const localData = localStorage.getItem('tours_selected');
        return localData ? JSON.parse(localData) : {'tours_selected': []};   
    })
  

    useEffect(()=>{
        localStorage.setItem("isSummer", JSON.stringify(isSummer))
    },[isSummer])
    
    useEffect(()=>{
        localStorage.setItem("tours", JSON.stringify(tours))
    },[tours])
    
    useEffect(()=>{
        localStorage.setItem("destinations", JSON.stringify(destinations))
    },[destinations])
    useEffect(()=>{
        localStorage.setItem("tours_selected", JSON.stringify(tours_selected))
    },[tours_selected])
    
return(
        <MyContext.Provider  value={{isSummer,setIsSummer,destinations,setDestinations,setTours,tours,setTours_selected,tours_selected}}>
            {props.children}
        </MyContext.Provider>

    )
} 