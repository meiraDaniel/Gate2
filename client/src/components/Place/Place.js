import React, { useContext,useState } from "react";
import { MyContext } from "../../Context/Context";
import "./Place.scss";
import { Chart } from "react-google-charts";
import { key } from "../../key";

export default function Place() {
  const { isSummer } = useContext(MyContext);
  const[selected,setSelected]=useState([])
  const Cities=[
    ['City'],
    ['Auckland'],
    ['Wellington'],
    ['Gisborne'],
    

  ]

  

  const chartEvents = [
    {
      eventName: "select",
      async callback ({ chartWrapper }) {
        const selectedId = chartWrapper.getChart().getSelection();
         const data = await  Cities[selectedId[0].row + 1]
        setSelected(data);
        console.log(data)
      
    }
    }
  ];


  return (
    <div className={isSummer ? "place--main-summer" : "place--main-winter"}>
  <div className="map">
      <Chart
        width={window.innerWidth*10}
        height={"100vh"}
        chartType="GeoChart"
        data={Cities}
        enableRegionInteractivity={true}
        chartEvents={chartEvents}
        options={{
          sizeAxis: { minValue: 0, maxValue: 200 },
          region: 'NZ',
          resolution:"provinces",
          displayMode: 'regions',
          datalessRegionColor: '#BABDC2',
          defaultColor: 'green',
          backgroundColor: "transparent",
          tooltip:{textStyle: {color: '#173F70'}, showColorCode: true},
        }
        }
        mapsApiKey={key}
        rootProps={{ "data-testid": "3" }}
      />
      </div>
      <div className="place--description-right">
      <h1>{selected[0]}</h1>
      <p>balblablabla</p>
      </div>
    </div>
  );
}
