import React, { useState } from 'react';
import './SumCalculator.css';  // make sure this import is here

function SumCalculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Sum Calculator</h2>

      <div className="inputs-row">
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          className="input-field"
        />
      </div>

      <button onClick={calculateSum} className="calculate-button">
        Calculate
      </button>

      {sum !== null && <h3 className="result">Sum: {sum}</h3>}
    </div>
  );
}

export default SumCalculator;
