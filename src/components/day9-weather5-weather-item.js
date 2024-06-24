export default function WeatherItem(props) {
  const data = props.data;

  if (!data || !data.list) {
    return null;
  }
//   console.log(data);

  return (
    <div className="container">
      <div className="column">
        {data.list.slice(0, 5).map((entry, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-title">
                {new Date(entry.dt * 1000).toLocaleDateString()}
              </h5>
              <p className="card-text">
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