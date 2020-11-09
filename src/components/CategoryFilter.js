import React from "react";
import NordicCountries from "../constants/NordicCountries";

function CategoryFilter({ countryFilter, setcountryFilter }) {
  return (
    <fieldset>
      <legend>Country</legend>
      {NordicCountries.map((cat) => (
        <label htmlFor={cat} key={cat}>
          {cat}
          <input
            type="radio"
            name="categories"
            id={cat}
            value={cat}
            checked={cat === countryFilter}
            onChange={(e) => {
              setcountryFilter(e.target.value);
            }}
          />
        </label>
      ))}
    </fieldset>
  );
}

export default CategoryFilter;
