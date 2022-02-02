import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState("Blue");

  const clickHandler = () => {
    if (backgroundColor === "red") {
      setBackgroundColor("blue");
      setText("Red");
    } else {
      setBackgroundColor("red");
      setText("Blue");
    }
  };

  const checkHandler = (e) => {
    setDisabled(e.target.checked);
  };

  return (
    <div>
      <button
        onClick={clickHandler}
        style={{ backgroundColor: `${disabled ? "grey" : backgroundColor}` }}
        disabled={disabled}
      >
        Change to {text}
      </button>

      <div>
        <label htmlFor="disable-button-checkbox">Disable Button</label>
        <input
          id="disable-button-checkbox"
          onChange={checkHandler}
          type="checkbox"
          checked={disabled}
        />
      </div>
    </div>
  );
}

export default App;

/* 
import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [text, setText] = useState("Blue");

  const clickHandler = (e) => {
    if (backgroundColor === "red") {
      setBackgroundColor("blue");
      setText("Red");
    } else {
      setBackgroundColor("red");
      setText("Blue");
    }
  };

  return (
    <div>
      <button
        onClick={clickHandler}
        style={{ backgroundColor: backgroundColor }}
      >
        Change to {text}
      </button>
    </div>
  );
}

export default App;

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

*/
