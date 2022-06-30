import React, { useState } from "react";
import AddDelete from "./AddDelete";

function App() {
  const [todo, setTodo] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTodo((prevState) => [...prevState, newItem]);
    setNewItem("");
  }

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function deleteItem(index) {
    setTodo((prevState) => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1),
    ]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newItem} />
        <button>Add</button>
      </form>
      <AddDelete todo={todo} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
