import React from "react";

export default function Carrosel({ data }) {
  return (
    <div >
    {data?
        <div>
          <h1>{data.name}</h1>
          <h2>{data.place}</h2>
          <p>{data.description}</p>
        </div>
      :null}
    </div>
  );
}
