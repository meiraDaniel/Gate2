import React,{useState, useEffect} from "react";

export default function Carrosel({ data }) {
  const[ star,set]=useState([])

useEffect(()=>{
  handleStar()
},[data])

const handleStar=()=>{
  let card = [];
  for (var i = 0; i < data.stars; i++) {
    card[i] = (1);
}
set(card)
}

  return (
    <div className="carrossel--main">
      {data ? (
        <div>
          <img src={data.img} alt="client" />
          <div className="stars">
          {star.map((e,i) => <span  key={i} >&#9733;</span>)}
         
          </div>
          <h1>{data.name}</h1>
         
          <div className="carrossel-bottom-description">
            <h2>{data.place}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
