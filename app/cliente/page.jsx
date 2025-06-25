"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Contador: {counter}
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};

export default Counter;
