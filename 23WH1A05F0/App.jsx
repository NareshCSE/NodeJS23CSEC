//commands to remember: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned , npm -- version, npx create-vite@latest, React framework, javascript variant.

//functional component
import "./App.css"
import {useState} from 'react'
//state is a object that would store info/data in a component
const App = () =>{
  const[value1,setValue1]= useState()
  const[value2,setValue2]= useState()
  const[result,setResult]= useState()
  //definition for handle change
  const handleChange = (event) =>{
    
    setValue1(event.target.value)
  }
  const handleChange2 = (event) =>{
    
    setValue2(event.target.value)
  }
  const handleClick = () =>{
    let v1 = parseInt(value1)
    let v2 = parseInt(value2)
    setResult(v1+v2)
  }
  return(
    
    <>
    <h1>
      hello world
    </h1>
    <input type = "text" placeholder ="first value" onChange ={handleChange}
    />
    <input type = "text" placeholder ="second value" onChange ={handleChange2}/>
    <button onClick = {handleClick}>Add</button>
    <p>
      Answer:{result}
    </p>
    
    </>
  )
}

export default App 
