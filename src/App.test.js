import { render, screen } from "@testing-library/react";
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

// test("button turns blue when clicked", () => {});
