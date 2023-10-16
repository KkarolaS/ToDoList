import { useState } from "react";

const ToDoItem = ({ name }) => {
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
    </div>
  );
};

export default ToDoItem;
