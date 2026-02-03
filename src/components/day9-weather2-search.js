// Use this API to search for cities:
// https://openweathermap.org/api/geocoding-api
import React from "react";
import Select from "./day9-weather3-select";

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const runSearch = () => {
    const query = searchTerm.trim();
    if (!query) {
      setSearchResults([]);
      return;
    }

    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
        query
      )}&limit=5&appid=7beedcd716bb91a99f2dfbd7d36d07d9`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runSearch();
  };

  return (
    <div className="w-100 p-3 mt-2 rounded-4 bg-light bg-opacity-10 shadow-sm search-panel">
      <div className="row">
        <form onSubmit={handleSubmit} className="row g-3 align-items-end mb-0">
          <label className="col-sm-4 col-form-label text-light">
            Search city
          </label>
          <div className="col-sm-5">
            <input
              data-testid="city-input"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              className="form-control form-control-lg bg-transparent text-light border-light border-opacity-25"
              placeholder="e.g. Calgary"
            />
          </div>
          <div className="col-sm-3">
            <button
              type="submit"
              className="btn btn-info btn-lg w-100 text-dark fw-semibold"
              disabled={!searchTerm.trim()}
            >
              Find
            </button>
          </div>
        </form>
        {searchResults.length > 0 && (
          <div className="text-info mt-2">{searchResults.length} matches found</div>
        )}
        <Select data={searchResults} />
      </div>
    </div>
  );
}
