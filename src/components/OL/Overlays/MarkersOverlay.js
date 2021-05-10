import { useContext, useEffect, useState } from "react";

import MapContext from "../Map/MapContext";

import { Overlay } from "ol";
import { fromLonLat } from "ol/proj";

import useMarker from "./useMarker";

export default function MarkersOverlay({ data }) {
  const { map } = useContext(MapContext);
  const [specie, setSpecie] = useState();
  const getMarker = useMarker(specie);

  useEffect(() => {
    if (!map) return;
    if (!data) return;

    data.map((report, index) => {
      const coordinate = fromLonLat([report.longitude, report.latitude]);

      const popup = document.createElement("div");
      popup.className = "popup";

      for (const [key, value] of Object.entries(report)) {
        const popupText = document.createElement("p");
        popupText.className = "popup-text";
        popupText.innerHTML = `${key}: ${value}`;
        popup.appendChild(popupText);
      }

      const marker = document.createElement("img");
      marker.className = "marker";
      setSpecie(report.species);
      marker.src = getMarker;
      marker.onmouseenter = () => (popup.style.display = "flex");
      marker.onmouseleave = () => (popup.style.display = "none");

      let sighting = new Overlay({
        id: index,
        position: coordinate,
        positioning: "top-right",
        element: marker,
        stopEvent: false,
      });

      let reportCard = new Overlay({
        id: index,
        position: coordinate,
        positioning: "bottom-left",
        element: popup,
        stopEvent: false,
      });

      map.addOverlay(sighting);
      map.addOverlay(reportCard);
      return null;
    });
  }, [data, map, getMarker]);

  return null;
}
