// Use this API to search for cities:
// https://openweathermap.org/api/geocoding-api
import React from "react";
import Select from "./day9-weather3-select";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  // const [cel, setCel] = React.useState(null);

  const handleChange = (event) => {
    // Get the input from the user and save it in a state variable
    // event.target is the input element
    // setSearchTerm(parseInt(event.target.value));
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=7beedcd716bb91a99f2dfbd7d36d07d9`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      });
    //   console.log(searchResults);
  };

  React.useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=7beedcd716bb91a99f2dfbd7d36d07d9`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      });
  }, [searchTerm]);

  return (
    <div className="container p-3 bg-success">
      <div class="row">
        {/* <i className='text-danger fw-bold'>Search component</i> */}
        <form onSubmit={handleSubmit} className="my-3 row g-3">
          <label className="col-sm-4 col-form-label">
            Please enter city name:
          </label>
          <div className="col-sm-4">
            <input
              rounded
              data-testid="city-input"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-sm-4">
            <input
              rounded
              type="submit"
              value="Search"
              className="btn btn-primary mb-3"
            />
          </div>
        </form>
        <Select data={searchResults} />
      </div>
    </div>
  );
}