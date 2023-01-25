import React, { useState } from "react";
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);
    const [steps, setSteps] = useState(1)

    const handleAdd = () => setCount((preV) => preV + steps)
    const handleSubtract = () => setCount((preV) => preV - steps)

    const handleStepChange = (e) => setSteps(parseInt(e.target.value))
  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h1 data-testid="counter" className={`${count >= 100 ? "green" : ""}${count <= -100 ? "red" :""}`}>{count}</h1>
      <div>
        <button data-testid="add-btn" onClick={handleAdd}>+</button>
        <input type="number" data-testid="input" value={steps} onChange={handleStepChange} />
        <button data-testid="subtract-btn" onClick={handleSubtract}>-</button>
      </div>
    </div>
  );
};

export default Counter;
