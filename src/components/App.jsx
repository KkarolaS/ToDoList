import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [item, setItem] = useState("");

  const saveValue = (e) => {
    const newValue = e.target.value;
    setItem(newValue);
  };

  const addItem = () => {
    if (item !== "") {
      setItemsList((prevValue) => [...prevValue, item]);
      setItem("");
    }
  };

  const deleteItem = (id) => {
    setItemsList((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        item={item}
        handleChange={saveValue}
        handleClick={addItem}
        handleKeyDown={addItem}
      />
      <div>
        <ul>
          {itemsList.map((item, index) => (
            <ToDoItem
              name={item}
              key={`${index}${item}`}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
