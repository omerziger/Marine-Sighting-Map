/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import Map from "./Map/Map";
import Layers from "./Layers/Layers";
import TileLayer from "./Layers/TileLayer";
import Controls from "./Controls/Controls";
import ZoomControl from "./Controls/ZoomControl";
import { fromLonLat } from "ol/proj";
import osm from "./osm";

import Search from "../Search/Search";

export default function Wraper() {
  const [zoom, setZoom] = useState(5);
  const [center, setCenter] = useState([-90, 40]);

  return (
    <Map zoom={zoom} center={fromLonLat(center)}>
      <Layers>
        <TileLayer source={osm()} zIndex={0} />
      </Layers>
      <Controls>
        <ZoomControl />
      </Controls>
      <Search />
    </Map>
  );
}
