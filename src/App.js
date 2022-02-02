import { useState } from "react";
import "./App.css";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

console.log(replaceCamelCaseWithSpaces("midnightBlue"));

function App() {
  const [backgroundColor, setBackgroundColor] = useState("mediumvioletred");
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState("Midnight Blue");

  const clickHandler = () => {
    if (backgroundColor === "mediumvioletred") {
      setBackgroundColor("midnightblue");
      setText("Medium Violet Red");
    } else {
      setBackgroundColor("mediumvioletred");
      setText("Midnight Blue");
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
