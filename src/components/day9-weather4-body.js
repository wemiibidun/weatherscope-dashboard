import React from "react";
import WeatherItem from "./day9-weather5-weather-item";
import Settings from "./day9-weather7-settings";
import Graph from "./day9-weather6-graph";

export default function Body(props) {
  const [settings, setSettings] = React.useState({
    tempCelsius: true,
    displayTemp: true,
    displayWind: true,
    displayIcon: true,
    displayHumidity: true,
  });
  const [weatherObj, setWeatherObj] = React.useState(null);
  const selectedCity = props.data;


  React.useEffect(() => {
    // console.log(selectedCity);
    // API docs https://openweathermap.org/forecast5
    const Weather_API_key = "6b9ee5f9edbf0469243e280ab4f5d256";
    const url = "https://api.openweathermap.org/data/2.5/forecast";
    // Read about Fetch API here: https://javascript.info/fetch
    fetch(`${url}?q=${selectedCity}&appid=${Weather_API_key}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherObj(data);
        console.log("API data came mounted");
      });
  }, [selectedCity]);

  const handleSettingsChange = (settingsUpdate) => {
    console.log(settingsUpdate)
    setSettings(() => {
      return { ...settings, ...settingsUpdate };
    });
    console.log(settings);
  };

  return (
    <div className="container p-3 bg-info">
      <i className="text-danger fw-bold">Body component</i>
      {/* {console.log("this is weather object")} */}
      {/* {console.log(weatherObj.list)} */}
      {weatherObj && weatherObj.city && (
        <h4>
          {weatherObj.city.name} - {weatherObj.city.country}
        </h4>
      )}
      <div className="row">
        <div className="col">
          <WeatherItem data={weatherObj} />
        </div>
        <div className="col">
          <Settings
            settings={settings}
            settingsChangeHandler={handleSettingsChange}
          />
        </div>
      </div>
      <div className="row">
        {weatherObj && <Graph data={weatherObj} dayIndex={1} />}
      </div>
    </div>
  );
}
