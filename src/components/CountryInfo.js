import React from "react";

function CountryInfo({ countryData, loading, error }) {
  if (loading) {
    return (
      <div className="countryInfo">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="countryInfo">
        <h2>{error}</h2>
      </div>
    );
  }

  return countryData ? (
    <div className="countryInfo">
      <h2>
        {countryData.name}
        {countryData.flag.emoji}
      </h2>
      <p>
        <em>{countryData.demonym}</em> people in{" "}
        <em>{countryData.nativeName}</em> speak:
      </p>
      <br />
      <ul>
        {countryData.officialLanguages.map((language) => {
          return <li key={language.name}>{language.name}</li>;
        })}
      </ul>
    </div>
  ) : (
    <div>
      <h2>Select a country to get info!</h2>
    </div>
  );
}

export default CountryInfo;
