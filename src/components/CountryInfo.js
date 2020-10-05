import React from "react";

const CountryInfo = ({ country, setSearch }) => {
  const resetSearch = () => {
    setSearch("");
    document.querySelector("#country").value = "";
  };

  return (
    <div className="info">
      <h1>{country.name}</h1>
      <div className="card">
        <img src={country.flag} alt=""></img>
        <div className="card-infobox">
          <h2>Capital: {country.capital}</h2>
          <h2>Population: {country.population}</h2>
          <h2>Languages:</h2>
          <ul className="langList">
            {country.languages.map((lang) => (
              <li key={lang.name}>{lang.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={resetSearch}>Back</button>
    </div>
  );
};

export default CountryInfo;
