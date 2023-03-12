import numeral from "numeral";
import React from "react";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "red",
    multiplier: 2000,
  },
  recovered: {
    hex: "green",
    multiplier: 2000,
  },
  deaths: {
    hex: "red",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1))
};

export const prettyPrintStat = (stat) => stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const ShowDataOnMap = ({ data, casesType }) => {


  const color = casesTypeColors[casesType].hex

  return data.map((country, index) => (
    <>
      <h3>{casesType}</h3>
      <Circle
        key={index}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        pathOptions={{ fillColor: color, color: color }}
        fillOpacity={0.5}
        radius={100000}
      >
        <Popup>
          <div className="info-container">
            <div
              className="info-flag"
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            ></div>
            <div className="info-name">{country.country}</div>
            <div className="info-confirmed">
              Cases: {numeral(country.cases).format("0,0")}
            </div>
            <div className="info-recovered">
              Recovered: {numeral(country.recovered).format("0,0")}
            </div>
            <div className="info-deaths">
              Deaths: {numeral(country.deaths).format("0,0")}
            </div>
          </div>
        </Popup>
      </Circle>
    </>
  ))
};