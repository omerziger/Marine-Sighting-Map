/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import Map from "./Map/Map";
import Layers from "./Layers/Layers";
import TileLayer from "./Layers/TileLayer";
import Controls from "./Controls/Controls";
import ZoomControl from "./Controls/ZoomControl";
import Overlays from "./Overlays/Overlays";
import MarkersOverlay from "./Overlays/MarkersOverlay";

import Search from "../Search/Search";

import { fromLonLat } from "ol/proj";
import osm from "./osm";

export default function Wraper() {
  const [zoom, setZoom] = useState(7);
  const [center, setCenter] = useState([-123.7, 48.2]);
  const [results, setResults] = useState(null);

  const handleSearchResults = (data) => {
    setResults(data);
  };

  return (
    <Map zoom={zoom} center={fromLonLat(center)}>
      <Layers>
        <TileLayer source={osm()} zIndex={0} />
      </Layers>
      <Controls>
        <ZoomControl />
      </Controls>
      <Overlays>
        <MarkersOverlay data={results} />
        <Search response={handleSearchResults} />
      </Overlays>
    </Map>
  );
}
