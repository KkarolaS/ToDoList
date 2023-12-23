import { useState } from "react";

const ToDoItem = ({ name, onChecked, id }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleThroughName = () => {
    setIsClicked((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="item-wrapper" onClick={toggleThroughName}>
      <li
        className="list-item"
        style={isClicked ? { textDecoration: "line-through" } : null}
      >
        {name}
      </li>
      <button
        className="btn btn-delete"
        onClick={() => {
          onChecked(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;

//make the delete button better styled
