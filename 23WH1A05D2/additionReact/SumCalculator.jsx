import React, { useState } from "react";
import "./SumCalculator.css"; // Link external CSS

function SumCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div className="calculator-container">
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="input-field"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="input-field"
      />
      <button onClick={handleSum} className="calculate-button">Calculate Sum</button>
      <h3>Sum: {sum}</h3>
    </div>
  );
}

export default SumCalculator;
