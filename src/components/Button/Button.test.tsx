import React from "react";
import Button from "./Button";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Running Test for Marbella Button", () => {
  test("Check Button Disabled", () => {
    render(<Button text="Button marbella" disabled />);
    expect(
      screen.getByRole("button", { name: "Button marbella" })
    ).toBeDisabled();
  });
});
