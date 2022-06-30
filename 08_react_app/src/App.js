import React from "react";
import WindowTracker from "./WindowTracker.js";

function App() {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
