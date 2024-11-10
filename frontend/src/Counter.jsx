import React, { useState } from "react";
import NamLst from "./NamLst";

function Counter() {
  const [count, setCount] = useState(10);
  function addOne() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <p> count ={count}</p>
      <NamLst />
      <button onClick={addOne}>Add one</button>
    </div>
  );
}

export default Counter;
