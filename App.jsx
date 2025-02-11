import "./App.css"
import {useState} from 'react'
const App=() =>{
  const [value1,setValue1] = useState();
  const [value2,setValue2] = useState();
  const [value3,setResult] = useState();

  const handleChange = (event) =>{
    console.log(event.target.value)
    setValue1(event.target.value)
  }
  const handle1Change = (event) =>{
    
    setValue2(event.target.value)
  }
  const handleclick=() => {
    let v1=parseInt(value1);
    let v2=parseInt(value2);
    setResult (v1+v2)
  } 

  return (
    <>
      <h1>Hello world</h1>
      <input type="text" 
      placeholder="User Name" 
      onChange={handleChange}
      />
      <input type="text" 
      placeholder="sec User name"
      onChange={handle1Change}
      />
      <button onClick={handleclick}>add</button>
      <p>Answer:{value3}</p>
    </>
  )
}


export default App