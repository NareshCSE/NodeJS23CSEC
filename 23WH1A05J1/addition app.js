import { useState } from "react";
import "./App.css";

// state: An object that would store info/data in a component
const App = () => {
  // Create state variables
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  // Definition for handleChange
  const handleChange = (event, type) => {
    if (type === "value1") setValue1(event.target.value);
    else if (type === "value2") setValue2(event.target.value);
  };

  const handleadd = () => {
    let v1 = parseInt(value1) || 0;
    let v2 = parseInt(value2) || 0;
    setResult(v1 + v2);
  };

  return (
    // Fragment
    <>  
      <input type="text" placeholder="First Value" onChange={(e) => handleChange(e, "value1")} />
      <input type="text" placeholder="Second Value" onChange={(e) => handleChange(e, "value2")} />
      <button onClick={handleadd}>Add</button>
      <p>Answer: {result}</p>
    </>
  );
};

export default App;
