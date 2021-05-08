import React, { useState } from "react";

import "./search.css";

export default function Search() {
  const [limit, setLimit] = useState(50);

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };

  return (
    <div className="search-container">
      <h1 className="heading">
        Find marine specie's sightings from around the globe.
      </h1>
      <form className="inputs-container">
        <div className="specie-container">
          <label>Select specie:</label>
          <select>
            <option value="0"></option>
            <option value="1">Orca</option>
            <option value="2">Minke</option>
            <option value="3">Gray whale</option>
            <option value="4">Humpback</option>
            <option value="5">Atlantic White-Sided Dolphin</option>
            <option value="6">Pacific White-Sided Dolphin</option>
            <option value="7">Dalls Porpoise</option>
            <option value="8">Harbor Porpoise</option>
            <option value="9">Harbor Seal</option>
            <option value="10">Northern Elephant Seal</option>
            <option value="11">Southern Elephant Seal</option>
            <option value="12">California Sea Lion</option>
            <option value="13">Steller Sea Lion</option>
            <option value="14">Sea Otter</option>
          </select>
        </div>
        <div className="limit-slider">
          <label>Sighting's limit:</label>
          <input
            onChange={handleLimitChange}
            type="range"
            min="1"
            max="1000"
            defaultValue="50"
            value={limit}
            className="slider"
          />
          <span id="limit-span">{limit}</span>
        </div>
        <div className="button-container">
          <button>Search</button>
        </div>
      </form>
      <span id="disclaimer">
        <strong>Disclaimer:</strong> I don't own this data. Data belongs to The
        Whale Museum .
      </span>
    </div>
  );
}
