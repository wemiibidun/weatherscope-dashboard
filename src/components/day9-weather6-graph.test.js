import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Graph from "./day9-weather6-graph";

describe("Graph Component", () => {
  const mockData = {
    list: [
      { dt: 1624428000, main: { humidity: 50 }, wind: { speed: 5 } },
      { dt: 1624431600, main: { humidity: 55 }, wind: { speed: 7 } },
      { dt: 1624435200, main: { humidity: 60 }, wind: { speed: 6 } },
    ],
  };

  const mockSettings = {
    displayHumidity: true,
    displayWind: true,
  };

  test("renders graph with title", () => {
    render(<Graph data={mockData} dayIndex={0} settings={mockSettings} />);

    // Check if the component renders the title
    expect(screen.getByText("Hourly Temperature data")).toBeInTheDocument();
  });
});
