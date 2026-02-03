import React from "react";
import Body from "./day9-weather4-body";

export default function Select(props) {
  const [userInput, setUserInput] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState(null);

  const cities = props.data;
  const citiesArray = Object.values(cities);
  const defaultValue =
    citiesArray.length > 0
      ? `${citiesArray[0].name},${citiesArray[0].country}`
      : "";

  React.useEffect(() => {
    if (defaultValue) {
      setUserInput(defaultValue);
    } else {
      setUserInput("");
    }
    setSelectedValue(null);
  }, [defaultValue]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = userInput || defaultValue;
    if (!value) return;
    setSelectedValue({ city: value, token: Date.now() });
  };

  return (
    <div className="w-100 p-3 m-1 rounded-4 bg-info bg-opacity-10 select-panel">
      <div className="row">
        <form onSubmit={handleSubmit} className="row g-3 align-items-center">
          <label className="col-sm col-form-label text-light align-self-center">
            Select location
          </label>
          <select
            value={userInput}
            onChange={handleChange}
            className="form-select form-select-lg col-md bg-light text-dark border-light border-opacity-25"
          >
            {citiesArray.length === 0 && (
              <option value="">Type a city to see matches</option>
            )}
            {citiesArray.map((city, index) => (
              <option
                key={city.country + index}
                value={`${city.name},${city.country}`}
              >
                {city.name}, {city.country}
              </option>
            ))}
          </select>
          <div className="col-sm col-form-label d-flex align-items-center">
            <button
              type="submit"
              className="btn btn-outline-info btn-lg text-light fw-semibold"
              disabled={!userInput}
            >
              Use
            </button>
          </div>
        </form>

        {selectedValue && (
          <div className="text-light mt-3">
            Selected: <span className="fw-semibold">{selectedValue.city}</span>
          </div>
        )}
        <Body data={selectedValue} />
      </div>
    </div>
  );
}
