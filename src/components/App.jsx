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
          {itemsList.map((item) => (
            <ToDoItem name={item} key={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
