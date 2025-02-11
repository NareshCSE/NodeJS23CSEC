//Functional component
import "./App.css"
import {useState} from 'react'
//State:An object that would store inf/data in a component
const App=()=>{
  //create a state variable
  const[value1,setvalue1]=useState()
  const[value2,setvalue2]=useState()
  const[result,setresult]=useState()
    const handleChange=(event)=>{
    console.log(event.target.value)
    setvalue1(event.target.value)
  }
  const handleChange2=(event)=>{
    console.log(event.target.value)
    setvalue2(event.target.value)
  }
  const handleClick=()=>{
    let v1=parseInt(value1)
    let v2=parseInt(value2)
    setresult(v1+v2)
  }

  return(
    <>
    <h1>
    ADDITION
    </h1>
    <input type="text" placeholder="Firstvalue"
    onChange={handleChange}/>
    <input type="text" placeholder="Secondvalue"
    onChange={handleChange2}/>
    <button onClick={handleClick} >Add</button>
    <p>Answer:{result}</p>
    </>
  )
}
export default App
