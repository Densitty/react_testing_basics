import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

import { replaceCamelCaseWithSpaces } from "./App";

test("button has correct initial color", () => {
  // 1. render the component we are testing for
  render(<App />);
  // 2. find the element we are interested in, name is the text on d ele
  const colorBtn = screen.getByRole("button", {
    name: `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`,
  });
  // 3. assertion test for the condition
  expect(colorBtn).toHaveStyle({
    backgroundColor: "mediumvioletred",
  });
});

// test("button has correct initial text", () => {});

test("button turns midnightblue when clicked", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", {
    name: `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`,
  });

  // fire the click event
  fireEvent.click(colorBtn);

  // expect the color to change to midnightblue
  expect(colorBtn).toHaveStyle({ backgroundColor: "midnightblue" });

  // expect the text to be "Change to Medium Violet Red"
  expect(colorBtn.textContent).toBe(
    `Change to ${replaceCamelCaseWithSpaces("MediumVioletRed")}`
  );
});

test("initial conditions", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", {
    name: `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`,
  });

  expect(colorBtn).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button and enables it when checked again", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", {
    name: `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`,
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});

test("Button turns gray when disabled and reverts to blue when enabled", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", {
    name: `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`,
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

  // since we want colorBtn to have midnightblue background when enabled, click on btn first (to turn to midnightblue)
  fireEvent.click(colorBtn);

  // disable the btn by checking the checkbox
  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: "grey" });

  // enable the btn, which now has a midnightblue background
  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: "midnightblue" });
});

// combine tests in a describe (a way of grouping tests) statement
describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
