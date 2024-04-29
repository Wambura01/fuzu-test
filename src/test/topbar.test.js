import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Topbar from "../components/topbar/topbar";

describe("Topbar", () => {
  it("renders the topbar", () => {
    render(<Topbar />);

    expect(screen.getByTestId("topbar-container")).toBeInTheDocument();
  });

  it("renders the logo", () => {
    render(<Topbar />);

    expect(screen.getByTestId("logo-container")).toBeInTheDocument();
  });

  it("renders the translation buttons", () => {
    render(<Topbar />);

    expect(screen.getByTestId("translation-container")).toBeInTheDocument();
  });
});
