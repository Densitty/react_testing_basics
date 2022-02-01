import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  // 1. render the component we are testing for
  render(<App />);
  // 2. find the element we are interested in, name is the text on d ele
  const colorBtn = screen.getByRole("button", { name: "Change to Blue" });
  // 3. assertion test for the condition
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
});

// test("button has correct initial text", () => {});

test("button turns blue when clicked", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button", { name: "Change to Blue" });
  // fire the click event
  fireEvent.click(colorBtn);
  // expect the color to change to blue
  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });
  // expect the text to be "Change to Red"
  expect(colorBtn.textContent).toBe("Change to Red");
});

test("initial conditions", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", { name: "Change to Blue" });
  expect(colorBtn).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button and enables it when checked again", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});
