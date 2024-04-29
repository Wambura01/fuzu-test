// Landing.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Landing from "../components/landing/landing";
import { weather } from "../utils/mockData";

describe("Landing", () => {
  const mockWeather = weather;

  it("renders all data containers", () => {
    render(<Landing weather={mockWeather} />);

    expect(screen.getByTestId("page-container")).toBeInTheDocument();
    expect(screen.getByTestId("page-title_container")).toBeInTheDocument();
    expect(screen.getByTestId("main-content-container")).toBeInTheDocument();
    expect(screen.getByTestId("weather-icon-container")).toBeInTheDocument();
    expect(screen.getByTestId("content-container")).toBeInTheDocument();
    expect(screen.getByTestId("temp-container")).toBeInTheDocument();
    expect(screen.getByTestId("weather-container")).toBeInTheDocument();
    expect(screen.getByTestId("location-container")).toBeInTheDocument();
    expect(screen.getByTestId("info-container")).toBeInTheDocument();
    expect(screen.getByTestId("info-humidity")).toBeInTheDocument();
    expect(screen.getByTestId("info-wind-speed")).toBeInTheDocument();
    expect(screen.getByTestId("breakdown-container")).toBeInTheDocument();
    expect(
      screen.getByTestId("hourly-breakdown_container")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("hourly-breakdown_content_container")
    ).toBeInTheDocument();
    expect(screen.getByTestId("daily-breakdown_container")).toBeInTheDocument();
    expect(
      screen.getByTestId("daily-breakdown_content_container")
    ).toBeInTheDocument();
  });
});
