//Functional component
import "./App.css"
import {useState } from "react"
//State: An object that would store info/data in a component

const App = () =>{
  
  const [val1, setVal1] = useState()
  const [val2, setVal2] = useState()
  const [ans, setAns] = useState()
  //Definition for handle change
  const handleChange = (event, type) =>{
    if(type=='val1')
      setVal1(event.target.value)
    else if(type=='val2')
      setVal2(event.target.value)

  }


  const handleClick = () =>{
    let v1 = parseInt(val1)
    let v2 = parseInt(val2)
    setAns(v1+v2)
  }

  return (
    //Fragment
    <>
      <h1>Hello World!!</h1>
      <input type="text" placeholder="First Value" onChange={(e)=>handleChange(e,'val1')}/>
      <input type="text" placeholder="Second Value" onChange={(e)=>handleChange(e,'val2')}/>
      <button onClick={handleClick}>Add</button>
      <p>Answer:{ans}</p>
    </>
  )
}

export default App
