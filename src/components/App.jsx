import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [itemsList, setItemsList] = useState([]);

  const [item, setItem] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setItem(newValue);
  };

  const addItem = () => {
    setItemsList((prevValue) => [...prevValue, item]);
    setItem("");
  };

  const deleteItem = (id) => {
    console.log(id);
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
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsList.map((item, index) => (
            <ToDoItem
              name={item}
              key={index}
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

//uuid zamiast index w key
