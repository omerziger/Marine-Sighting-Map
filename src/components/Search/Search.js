import React, { useState, useEffect } from "react";

import "./search.css";

// useSearch is a hook that calls "The Whale Museum API" with the parameters provided.
import useSearch from "./useSearch";

export default function Search() {
  const [limit, setLimit] = useState(50);
  const [specie, setSpecie] = useState(null);
  const [submit, setSubmit] = useState(false);
  const { response, isLoading } = useSearch({ limit, specie, submit });

  const handleSelectChange = (e) => {
    setSpecie(e.target.value);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!specie) return console.log("must select specie");
    setSubmit(true);
  };

  // Listen for API responses.
  useEffect(() => {
    if (!response) return;
    if (isLoading) return;
    setSubmit(false);
    // Overlay hook goes HERE.
  }, [response, isLoading]);

  return (
    <div className="search-container">
      <h1 className="heading">
        Find marine specie's sightings from around the globe.
      </h1>
      <form onSubmit={handleFormSubmit} className="inputs-container">
        <div className="specie-container">
          <label>Select specie:</label>
          <select onChange={handleSelectChange}>
            <option value={null}></option>
            <option value="orca">Orca</option>
            <option value="minke">Minke</option>
            <option value="gray whale">Gray whale</option>
            <option value="humpback">Humpback</option>
            <option value="atlantic white-sided dolphin">
              Atlantic White-Sided Dolphin
            </option>
            <option value="pacific white-sided dolphin">
              Pacific White-Sided Dolphin
            </option>
            <option value="dalls porpoise">Dalls Porpoise</option>
            <option value="harbor porpoise">Harbor Porpoise</option>
            <option value="harbor seal">Harbor Seal</option>
            <option value="northern elephant seal">
              Northern Elephant Seal
            </option>
            <option value="southern elephant seal">
              Southern Elephant Seal
            </option>
            <option value="california sea Lion">California Sea Lion</option>
            <option value="steller sea lion">Steller Sea Lion</option>
            <option value="sea otter">Sea Otter</option>
          </select>
        </div>
        <div className="limit-slider">
          <label>Sighting's limit:</label>
          <input
            onChange={handleLimitChange}
            type="range"
            min="1"
            max="1000"
            value={limit}
            className="slider"
          />
          <span id="limit-span">{limit}</span>
        </div>
        <div className="button-container">
          <button>{isLoading ? "Loading..." : "Search"}</button>
        </div>
      </form>
      <span id="disclaimer">
        <strong>Disclaimer:</strong> I don't own this data. Data belongs to
        <a target="_" href="https://whalemuseum.org">
          The Whale Museum
        </a>
        .
      </span>
    </div>
  );
}
