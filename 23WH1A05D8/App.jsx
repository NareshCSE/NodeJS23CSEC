//functional component

import "./App.css"
import {useState} from 'react'
//state: An object that would store info/data in a component
const App = ()=>{

  const [value1,setValue1]= useState()
  const [value2,setValue2] = useState()
  const [result,setResult] = useState()
  
  //defination for handle change

  const handleChange=(event)=>{ 
    setValue1(event.target.value)
  }
  const handleChange2=(event)=>{
      setValue2(event.target.value)
  }

  const handleClick=()=>{
    let v1 = parseInt(value1)
    let v2 = parseInt(value2)
    setResult(v1+v2)
  }
  
  return (
   //fragment

   <>
    <h1>HI!!..</h1>
    <input type="text" 
    placeholder = "First value"
    onChange={handleChange}
    />
    <input type="text" 
    placeholder = "Second value"
    onChange={handleChange2}
    />
    <button onClick = {handleClick}>Add</button>
    <p>Answer:{result}</p>
    

    </>
  )
}

export default App
