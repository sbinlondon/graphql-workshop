import React, { useEffect } from "react";
import CategoryFilter from "./components/CategoryFilter";
import CountryInfo from "./components/CountryInfo";

const query = `
query getCountry($countryName: String!) {
  Country(name: $countryName) {
    name
    nativeName
    demonym
    officialLanguages {
      name
      nativeName
    }
    flag {
      emoji
    }
  }
}
`;

function App() {
  const [countryFilter, setcountryFilter] = React.useState(null);
  const [countries, setCountries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    // if we haven't selected a country yet, don't do anything
    if (!countryFilter) {
      return;
    }
    setLoading(true);
    fetch("https://countries-274616.ew.r.appspot.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { countryName: countryFilter },
      }),
    })
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries.data.Country);
      });
    setLoading(false);
  }, [countryFilter]);

  return (
    <main>
      <section className="filters">
        <h1>Nordic Countries</h1>
        <h2>Select one</h2>
        <form>
          <CategoryFilter
            countryFilter={countryFilter}
            setcountryFilter={setcountryFilter}
          />
        </form>
      </section>
      <section className="country">
        <CountryInfo countryData={countries[0]} loading={loading} />
      </section>
    </main>
  );
}

export default App;
