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
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const selectedCity = props.data?.city || "";
  const refreshToken = props.data?.token || 0;

  React.useEffect(() => {
    if (!selectedCity) return;
    const Weather_API_key = "7beedcd716bb91a99f2dfbd7d36d07d9";
    const url = "https://api.openweathermap.org/data/2.5/forecast";

    setError("");
    setIsLoading(true);

    fetch(
      `${url}?q=${encodeURIComponent(selectedCity)}&appid=${Weather_API_key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod && data.cod !== "200") {
          setError(data.message || "Unable to load forecast.");
          return;
        }
        setWeatherObj(data);
      })
      .catch(() => {
        setError("Unable to load forecast.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedCity, refreshToken]);

  const handleSettingsChange = (settingsUpdate) => {
    setSettings({ ...settings, ...settingsUpdate });
  };

  return (
    <div className="p-4 mt-4 rounded-4 main-panel">
      {error && <div className="text-warning mb-3">{error}</div>}

      {weatherObj && weatherObj.city && (
        <h4 className="text-light shadow-sm p-3 mb-4 rounded bg-info bg-opacity-10 d-flex justify-content-between align-items-center">
          <span>
            Weather in <span className="text-info">{weatherObj.city.name}</span>,{" "}
            <span className="text-info">{weatherObj.city.country}</span>
          </span>
          {isLoading && <span className="text-light-50">Updating...</span>}
        </h4>
      )}

      <div className="mb-4">
        <WeatherItem data={weatherObj} settings={settings} />
      </div>

      <div className="row g-3 align-items-stretch">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Settings
            settings={settings}
            settingsChangeHandler={handleSettingsChange}
          />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          {weatherObj && (
            <Graph data={weatherObj} dayIndex={1} settings={settings} />
          )}
        </div>
      </div>
    </div>
  );
}
