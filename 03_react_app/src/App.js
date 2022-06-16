import React from "react";
import "./App.css";

const names = ["Jane", "Jill", "Bob"];

function App() {
  const demo = [];
  for (let name of names) {
    demo.push(<DemoComponent user={name} />);
  }
  return <div>{demo}</div>;
}

// functional component to illustrate props
function DemoComponent(props) {
  return (
    <div>
      {/* accessing information from props  */}
      <h2>Hello {props.user}</h2>
    </div>
  );
}

export default App;
