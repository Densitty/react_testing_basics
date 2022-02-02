import { useState } from "react";
import "./App.css";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

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
