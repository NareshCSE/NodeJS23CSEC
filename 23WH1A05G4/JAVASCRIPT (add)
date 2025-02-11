//Functional component
import { useState } from "react"
import "./App.css"
const App=()=>{
  //3 state variables
  const[value1,setValue1]=useState()
  const[value2,setValue2]=useState()
  const[result,setResult]=useState()

  //definition for handleChange
  const handleChange=(event)=>{
    //tracing
    console.log(event.target.value)
    setValue1(event.target.value)
  }

  const handleChange2=(event)=>{
    setValue2(event.target.value)
  }

  const handleClick=(event)=>{
    let v1=parseInt(value1)
    let v2=parseInt(value2)
    setResult(v1+v2)

  }
  return (
    //fragment
  <> 
  <h1>Hello World</h1>
  <input type="text" placeholder="First Value"
  onChange={handleChange}
  />
  <input type="text" placeholder="Second Value"
  onChange={handleChange2}/>

  <button onClick={handleClick}>Add</button>
  <p>Answer: {result}</p>
  </>
  )
}

export default App
