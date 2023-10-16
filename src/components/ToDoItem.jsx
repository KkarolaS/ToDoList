import { useState } from "react";

const ToDoItem = ({ name, onChecked, id }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleThroughName = () => {
    setIsClicked((prevState) => {
      return !prevState;
    });
  };

  return (
    <div onClick={toggleThroughName}>
      <li style={isClicked ? { textDecoration: "line-through" } : null}>
        {name}
      </li>
      <button
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
