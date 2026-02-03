export default function WeatherItem(props) {
  const data = props.data;
  const settings = props.settings;

  if (!data || !data.list) {
    return null;
  }

  const daily = data.list.filter((day, index) => index % 8 === 0);

  return (
    <div className="container">
      <div className="forecast-grid">
        {daily.map((entry) => (
          <div
            key={entry.dt}
            className="card forecast-card bg-secondary bg-opacity-50 text-white border border-light border-opacity-10 shadow-sm"
          >
            <div className="card-body d-flex flex-column gap-2">
              <h5 className="card-title text-info fw-semibold mb-0 text-center">
                {new Date(entry.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </h5>
              {entry.weather && entry.weather.length > 0 && (
                <div className="forecast-icon-wrap align-self-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`}
                    alt="icon"
                    className="forecast-icon"
                    data-testid="icon"
                  />
                </div>
              )}

              <div className="d-flex flex-wrap gap-3 text-nowrap">
                {settings.displayTemp && (
                  <p className="card-text mb-0" data-testid="temp">
                    Temp:{" "}
                    {settings.tempCelsius
                      ? entry.main.temp.toFixed(1) + "°C"
                      : ((entry.main.temp * 9) / 5 + 32).toFixed(1) + "°F"}
                  </p>
                )}

                {settings.displayTemp && (
                  <p className="card-text mb-0" data-testid="feelsLike">
                    Feels:{" "}
                    {settings.tempCelsius
                      ? entry.main.feels_like.toFixed(1) + "°C"
                      : ((entry.main.feels_like * 9) / 5 + 32).toFixed(1) + "°F"}
                  </p>
                )}

                {settings.displayHumidity && (
                  <p className="card-text mb-0" data-testid="humidity">
                    Humidity: {entry.main.humidity}%
                  </p>
                )}

                {settings.displayWind && (
                  <p className="card-text mb-0" data-testid="windSpeed">
                    Wind: {entry.wind.speed} m/s
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
