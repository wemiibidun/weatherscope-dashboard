export default function WeatherItem(props) {
  const data = props.data;

  if (!data || !data.list) {
    return null;
  }
  // console.log(data);

  return (
    <div className="container">
      <div className="column d-flex flex-direction-column">
        {data.list.slice(0, 5).map((entry, index) => (
          <div key={index} className="card bg-secondary shadow-md m-2">
            <div className="card-body d-flex flex-wrap text-nowrap py-4 fw-bold justify-content-start">
              <h5 className="card-title text-white fs-6 fw-bold">
                {new Date(entry.dt * 1000).toLocaleDateString()}
              </h5>
              <p className="card-text text-white fs-6">
                Temperature: {entry.main.temp}°C
                <br />
                Feels Like: {entry.main.feels_like}°C
                <br />
                Wind Speed: {entry.wind.speed}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
