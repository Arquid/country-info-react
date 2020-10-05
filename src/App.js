import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Country info</h1>
      </div>

      <SearchForm setSearch={setSearch} />
      <CountryList
        countries={countries}
        setSearch={setSearch}
        search={search}
      />
    </div>
  );
};

export default App;
