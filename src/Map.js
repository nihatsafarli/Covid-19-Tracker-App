import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import "./Map.css";
import { ShowDataOnMap } from "./util";


function Map({ countries, casesType, center, zoom }) {

  const [type, setType] = useState(casesType);

  useEffect(() => {

    setType(casesType);

  }, [casesType]);

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ShowDataOnMap data={countries} casesType={type} />
      </MapContainer>
    </div>
  );
}

export default Map;