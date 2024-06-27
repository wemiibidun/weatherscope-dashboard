export default function WeatherItem(props) {
  const data = props.data;
  const settings = props.settings;

  if (!data || !data.list) {
    return null;
  }
  console.log(data);
  const daily = data.list.filter((day, index) => index % 8 === 0);

  return (
    <div className="container">
      <div className="column d-flex flex-direction-column">
        {daily.map((entry, index) => (
          <div id={index} className="card bg-secondary shadow-md m-2">
            <div className="card-body d-flex flex-wrap text-nowrap py-4 fw-bold justify-content-start">
              <div className="alert alert-success" role="alert">
                <h5 className="card-title text-dark fs-6 fw-bolder">
                  {new Date(entry.dt * 1000).toLocaleDateString("en-CA", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </h5>
              </div>

              <div className="card-body d-flex flex-wrap text-nowrap py-4 fw-bold justify-content-center">
                {entry.weather && entry.weather.length > 0 && (
                  <img
                    src={`http://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`}
                    alt="icon"
                    className="align-self-center" testid="icon"
                  />
                )}
              </div>

              {settings.displayTemp && (
                <p className="card-text text-white fs-6" data-testid="temp">
                  Temperature:{" "}
                  {settings.tempCelsius
                    ? entry.main.temp.toFixed(2) + "°C"
                    : ((entry.main.temp * 9) / 5 + 32).toFixed(2) + "°F"}
                </p>
              )}

              {settings.displayTemp && (
                <p
                  className="card-text text-white fs-6"
                  data-testid="feelsLike"
                >
                  Feels Like:
                  {settings.tempCelsius
                    ? entry.main.feels_like.toFixed(2) + "°C"
                    : ((entry.main.feels_like * 9) / 5 + 32).toFixed(2) + "°F"}
                </p>
              )}
              {settings.displayHumidity && (
                <p className="card-text text-white fs-6" data-testid="humidity">
                  Humidity: {entry.main.humidity}%
                </p>
              )}
              {settings.displayWind && (
                <p
                  className="card-text text-white fs-6"
                  data-testid="windSpeed"
                >
                  Wind Speed: {entry.wind.speed} m/s
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
