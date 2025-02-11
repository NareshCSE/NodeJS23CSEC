//Functional Component
import {useState} from 'react'
import "./App.css"
//State: An object that would store info/data in a component
const App=() =>{
//create a state variable
const[value1, setValue1]=useState()
const[value2, setValue2]=useState()
const[result, setResult]=useState()

//Definition for handleChange
const handleChange=(event) =>{
  setValue1(event.target.value)
}
const handleChange2=(event)=>{
  setValue2(event.target.value)
}
const handleClick=() =>{
  let v1=parseInt(value1)
  let v2=parseInt(value2)
  setResult(v1+v2)
}
  return (
    //Fragment
    <>
    <h1>Hello World</h1>
    <input type="text" 
    placeholder="First Value"
    onChange={handleChange}
    />
    <input type="text" 
    placeholder="Second Value" 
    onChange={handleChange2}/>
    <button onClick={handleClick}>Add</button>
    <p>Answer:{result}</p>
    </>
  )
}
export default App
