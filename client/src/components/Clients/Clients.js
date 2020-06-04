import React, { useState} from "react";
import { client } from "../../data";

function Clients() {
  const [data, setData] = useState(client.sort(() => Math.random() - 0.5));

  

  return (
    <div>
      {data.slice(0,3).map((client) => (
        <div>
          <h1>{client.name}</h1>
          <h2>{client.place}</h2>
          <p>{client.description}</p>
        </div>
      ))}
    </div>
  );
}
export default Clients;
