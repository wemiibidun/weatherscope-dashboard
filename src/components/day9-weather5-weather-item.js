// import { type } from "@testing-library/user-event/dist/type";

export default function WeatherItem(props) {
  const data = props.data;

  if (!data) {
    return null;
  }
//   console.log(data);

  return (
    <div className="container p-3 bg-success">
      <i className="text-danger fw-bold">Weather Item component</i>
      {data &&
        data.list &&
        data.list.map((entry, index) => (
          <li data-testid="11" key={index}>
            {new Date(entry.dt * 1000).toLocaleDateString()} - Temperature{" "}
            {entry.main.temp}C, Feels Like {entry.main.feels_like}C - Wind Speed{" "}
            {entry.wind.speed}
          </li>
        ))}
    </div>
  );
}
