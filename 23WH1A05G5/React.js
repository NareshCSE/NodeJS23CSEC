//functional Component
import {useState} from 'react'
import "./App.css" //for centre and for styling 
//State:An object that would store info/data in a componenet
const App = () =>{
  //Create a state variable
  const[value1,setvalue1] =useState() //its like get and set methods 
  const[value2,setvalue2] =useState() //values are stored in this state methods
  const[result,setResult] =useState()

  //Definition for handlechange
  const handlechange=(event)=>{
    console.log(event.target.value)
    setvalue1(event.target.value)
  }
  const handle2change=(event)=>{
    setvalue2(event.target.value)
  }
  const handleClick=()=>{
    let var1=parseInt(value1)
    let var2=parseInt(value2)
    setResult(var1+var2)
  }


  return (
    //Fragment "<> </>"
    <> 
      <h1> Hello World</h1>
      <input type="text" placeholder="First Value" 
      onChange={handlechange} //Event 
      />
      <input type="text" placeholder="Second Value"
      onChange={handle2change}
      />
      <button onClick={handleClick}> Add</button>
      <p>Answer:{result}</p>
      
    </>
  )
}

export default App //to know the main that to work the code and get output 
