import Search from "./day9-weather2-search";

export default function Main() {
  return (
    <div className="container p-4">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-3">
        <div>
          <p className="text-uppercase text-info fw-semibold mb-2 tracking-wide">
            Weather Dashboard
          </p>
          <h2 className="m-0">Forecasts at a glance.</h2>
        </div>
        <div className="text-info-emphasis">Powered by OpenWeather</div>
      </div>
      <Search />
    </div>
  );
}
