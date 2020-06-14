import React,{useState, useEffect,useCallback} from "react";
import {useTransition,animated} from 'react-spring'

export default function Carrosel({ data }) {
  const[ star,set]=useState([])

  
  const transition = useTransition(data, item=>item.id,{
    from: { transform:"scale(0)", transition:'ease', opacity:0,display:'flex'},
    enter: { transform:"scale(1)", transition:'ease',opacity:1 },
    leave: { transform:"scale(0)",   transition:'ease', display:'none'},
  })

  const fechData =  useCallback(()=>{
    let card = [];
    for (var i = 0; i < data.stars; i++) {
      card[i] = (1);
  }
  set(card) },[data])


  useEffect(()=>{
  fechData()
},[fechData])



  return (
    <div className="carrossel--main">
      {data ? transition.map(({item,props,key}) =>
        <animated.div key={key} style={props}>
{/*           <img src={data.image_file} alt="client" />
 */}          <div className="stars">         
            {star.map((e,i) => <span  key={i} >&#9733;</span>)}
         
       </div>
          <h1>{data.name}</h1>
         
          <div className="carrossel-bottom-description">
            <h2>{data.tour_name}</h2>
            <p>{data.comment}</p>
          </div>
        </animated.div>
      ) : null}
    </div>
  );
}
