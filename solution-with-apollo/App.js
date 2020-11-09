import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import CategoryFilter from "./components/CategoryFilter";
import CountryInfo from "./components/CountryInfo";

const GET_COUNTRIES = gql`
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

  // we set our loading state and error messages straight from the result of the query
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    // you can ask Apollo to skip the query based on certain conditions
    // i.e. here if we have not selected a country yet
    skip: !countryFilter,
    variables: { countryName: countryFilter },
  });

  useEffect(() => {
    if (!countryFilter || !data) {
      return;
    }
    setCountries(data.Country);
  }, [countryFilter, data]);

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
        <CountryInfo
          countryData={countries[0]}
          error="oh no there's been an error!"
          loading={loading}
        />
      </section>
    </main>
  );
}

export default App;
