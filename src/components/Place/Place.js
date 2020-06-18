import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../Context/Context";
import "./Place.scss";
import { Chart } from "react-google-charts";
import "dotenv";

export default function Place() {
  const { isSummer, tours } = useContext(MyContext);
  const [selected, setSelected] = useState([]);
  const [city, setCity] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const cities = [["City"]];
    tours.tours.forEach((e) => cities.push([`${e.place.split(",")[0]}`]));
    setCity(cities);
  }, [tours]);

  const chartEvents = [
    {
      eventName: "select",
      async callback({ chartWrapper }) {
        const selectedId = chartWrapper.getChart().getSelection();
        const data = await city[selectedId[0].row + 1];
        await setSelected(data);
        setDescription(
          tours.tours.filter((e) => e.place.split(",")[0].includes(data))[0]
            .description
        );
      },
    },
  ];

  return (
    <div
      onMouseLeave={() => {
        setDescription("");
        setSelected("");
      }}
      className={isSummer ? "place--main-summer" : "place--main-winter"}
    >
      <div className="map">
        <Chart
          width={window.innerWidth * 10}
          height={"100vh"}
          chartType="GeoChart"
          data={city}
          enableRegionInteractivity={true}
          chartEvents={chartEvents}
          options={{
            sizeAxis: { minValue: 0, maxValue: 200 },
            region: "NZ",
            resolution: "provinces",
            displayMode: "regions",
            datalessRegionColor: "#BABDC2",
            defaultColor: "green",
            backgroundColor: "transparent",
            tooltip: { textStyle: { color: "#173F70" }, showColorCode: true },
          }}
          mapsApiKey={process.env.REACT_APP_SECRET_NAME}
          rootProps={{ "data-testid": "3" }}
        />
      </div>
      <div className="place--description-right">
        <h1>{selected[0]}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
