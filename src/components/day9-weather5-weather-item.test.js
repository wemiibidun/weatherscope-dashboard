import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherItem from "./day9-weather5-weather-item";

const data = {
  list: [
    {
      dt: 1643723400,
      main: {
        temp: 283.15,
        feels_like: 281.15,
        humidity: 80,
      },
      wind: {
        speed: 5.5,
      },
    },
  ],
};

const settings = {
  tempCelsius: true,
  displayTemp: true,
  displayWind: true,
  displayIcon: true,
  displayHumidity: true,
};

test("loads the WeatherItem component", async () => {
  // Act
  render(<WeatherItem data={data} settings={settings} />);

  // Assert
  expect(screen.getByTestId("temp")).toBeInTheDocument();
  expect(screen.getByTestId("temp")).toHaveClass("card-text text-white fs-6");

  expect(screen.getByTestId("feelsLike")).toBeInTheDocument();
  expect(screen.getByTestId("feelsLike")).toHaveClass("card-text text-white fs-6");

  expect(screen.getByTestId("humidity")).toBeInTheDocument();
  expect(screen.getByTestId("humidity")).toHaveClass("card-text text-white fs-6");

  expect(screen.getByTestId("windSpeed")).toBeInTheDocument();
  expect(screen.getByTestId("windSpeed")).toHaveClass("card-text text-white fs-6");
});
