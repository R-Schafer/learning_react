import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  function handleClick() {
    if (color === "black") {
      setColor("red");
    } else {
      setColor("black");
    }
  }

  return (
    <div>
      <div
        className="myDiv"
        style={{
          backgroundColor: color,
        }}
        onClick={handleClick}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
}

export default App;
