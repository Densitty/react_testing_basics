import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [text, setText] = useState("Blue");

  const clickHandler = (e) => {
    setBackgroundColor("blue");
    setText("Red");
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
