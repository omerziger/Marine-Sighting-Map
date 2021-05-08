import React, { useEffect, useRef, useState } from "react";

import "./map.css";

import MapContext from "./MapContext";
import * as ol from "ol";

export default function Map({ children, zoom, center }) {
  const [map, setMap] = useState(null);
  const mapRef = useRef();

  // Intialize the map as the component mounts.
  useEffect(() => {
    let options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
    };

    let mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, [zoom, center]);

  // Handle zoom changes, managed by props.
  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom, map]);

  // Handle center changes, managed by props.
  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center);
  }, [center, map]);

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  );
}
