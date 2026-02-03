export default function Settings(props) {
  const handleTempUnitChange = (value) => {
    props.settingsChangeHandler({ tempCelsius: value });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    props.settingsChangeHandler({ [name]: value });
  };

  const celsius = props.settings["tempCelsius"];

  return (
    <div className="card panel-card settings-card panel-card h-100 p-3 bg-dark bg-opacity-25 shadow-sm text-light">
      <div className="card-body">
        <h4 className="mb-3">Settings</h4>

        <div className="mb-4">
          <p className="text-info fw-semibold mb-2">Temperature Unit</p>
          <div className="form-check form-check-inline">
            <input
              data-testid="tempUnit1"
              className="form-check-input"
              type="radio"
              name="tempCelsius"
              id="tempUnit1"
              checked={celsius}
              onChange={() => handleTempUnitChange(true)}
            />
            <label className="form-check-label" htmlFor="tempUnit1">
              Celsius
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              data-testid="tempUnit2"
              className="form-check-input"
              type="radio"
              name="tempCelsius"
              id="tempUnit2"
              checked={!celsius}
              onChange={() => handleTempUnitChange(false)}
            />
            <label className="form-check-label" htmlFor="tempUnit2">
              Fahrenheit
            </label>
          </div>
        </div>

        <div className="bg-dark bg-opacity-50 rounded-4 p-3">
          <p className="text-info fw-semibold mb-3">Display Options</p>
          <div className="display-options-vertical">
            <CheckBox
              name="displayTemp"
              checked={props.settings["displayTemp"]}
              text="Temperature"
              handleChange={handleChange}
            />
            <CheckBox
              name="displayHumidity"
              checked={props.settings["displayHumidity"]}
              text="Humidity"
              handleChange={handleChange}
            />
            <CheckBox
              name="displayWind"
              checked={props.settings["displayWind"]}
              text="Wind"
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckBox(props) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id={props.name}
        checked={props.checked}
        onChange={props.handleChange}
        name={props.name}
      />
      <label className="form-check-label" htmlFor={props.name}>
        {props.text}
      </label>
    </div>
  );
}
