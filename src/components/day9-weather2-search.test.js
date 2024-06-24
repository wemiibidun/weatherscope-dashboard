import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "./day9-weather2-search";

describe("Search Component", () => {
  test("loads the Search component and performs search", async () => {
    render(<Search />);

    // Assert initial render
    expect(screen.getByText("Please enter city name:")).toBeInTheDocument();
    const input = screen.getByTestId("city-input");
    expect(input).toBeInTheDocument();

    // Simulate typing 'London' into the input field
    fireEvent.change(input, { target: { value: "London" } });
    expect(input.value).toBe("London");

    // Simulate form submission
    const searchButton = screen.getByTestId("city-input");
    fireEvent.click(searchButton);

    await waitFor(() => {
      screen.getAllByRole("option");
    });

    // Assertions for search results
    const searchResults = screen.getAllByRole("option");
    expect(searchResults.length).toBeGreaterThanOrEqual(1);
  });
});