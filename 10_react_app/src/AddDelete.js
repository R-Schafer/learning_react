import React from "react";

function AddDelete(props) {
  function handleClick(event) {
    props.deleteItem(parseInt(event.target.dataset.index, 10));
  }

  return (
    <ol>
      {props.todo.map((todo, index) => {
        return (
          <li>
            <span>{todo}</span>
            <button onClick={handleClick} data-index={index}>
              delete
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default AddDelete;
