import {useState} from "react"
import "./App.css"
const App=()=>
{
  const[value1,setValue1]=useState()
  const[value2,setValue2]=useState()
  const[result,setResult]=useState()
  //Definition for handle change
  const handleChange=(event,type)=>
  {
    if(type==="value1")
    setValue1(event.target.value)
  else if(type==="value2")
    setValue2(event.target.value)
  }
  const handleClick=()=>
  {
    let v1=parseInt(value1)
    let v2=parseInt(value2)
    setResult(v1+v2)
  }
  return (
   //Empty tag is fragment
    <>
    <h1>Hello World</h1>
    <input type="text" placeholder="First value" onChange={(e)=>handleChange(e,'value1')}/>
    <input type="text" placeholder="Second value" onChange={(e)=>handleChange(e,'value2')}/>
    <button onClick={handleClick}>Add</button>
    <p>Answer:{result}</p>
    </>
 
  
)
}

export default App
