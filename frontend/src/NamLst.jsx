import React, { useState } from "react";

function NamLst() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState(""); // Use camelCase for state names

  function onAddName() {
    if (name.trim() === "") return; // Prevent adding empty names
    setList([...list, name]); // Correct usage of spread operator
    setName(""); // Reset the input field
  }

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Use camelCase for state updates
      />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

export default NamLst;
