import { useEffect } from "react";
import L from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { GeoJSON } from "react-leaflet";

import styles from "./Map.module.css";

import mapData from "../data/piracicaba.json";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const { MapContainer, MapConsumer } = ReactLeaflet;

const Map = ({ children, className, ...rest }) => {
  let mapClassName = styles.map;

  const countryStyle = {
    fillColor: "red",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: iconRetinaUrl.src,
        iconUrl: iconUrl.src,
        shadowUrl: shadowUrl.src,
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      <MapConsumer>{(map) => children(ReactLeaflet, map)}</MapConsumer>

      <GeoJSON
        style={countryStyle}
        data={mapData.features}
        // onEachFeature={this.onEachCountry}
        // onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default Map;
