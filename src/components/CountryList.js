import React from "react";
import CountryInfo from "./CountryInfo";

const CountryList = ({ countries, setSearch, search }) => {
  const countryFilter = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {countryFilter.length === 0 ? (
        <p>No matches!</p>
      ) : countryFilter.length === 1 ? (
        <CountryInfo country={countryFilter[0]} setSearch={setSearch} />
      ) : countryFilter.length === 2 &&
        (countryFilter[0].name === "Niger" ||
          countryFilter[0].name === "Congo") ? (
        <CountryInfo country={countryFilter[0]} setSearch={setSearch} />
      ) : (
        countryFilter.map((country) => (
          <p
            className="list"
            key={country.name}
            onClick={() => setSearch(country.name)}
          >
            {country.name}
          </p>
        ))
      )}
    </div>
  );
};

export default CountryList;
