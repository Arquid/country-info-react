import React from "react";

const SearchForm = ({ setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form className="searchForm">
      <label htmlFor="country">Search country:</label>
      <input type="text" id="country" onChange={handleSearch}></input>
    </form>
  );
};

export default SearchForm;
