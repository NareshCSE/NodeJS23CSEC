// Functional Component
import {useState} from 'react'
import "./App.css"
//State: An object thta would store info/data in component
const App = () =>{
  //create state variable
  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [result, setResult] = useState()

  //Definition for handleChange

  const handleChange = (event) =>{
    setValue1(event.target.value)
  }

  const handleChange1 = (event) =>{
    setValue2(event.target.value)
  }

  // if(type == 'value1')
  //   setValue1(event.target.value)
  // else if(type == 'value2')
  //   setValue1(event.target.value)
  const handleClick = () =>{
    let v1 = parseInt(value1)
    let v2 = parseInt(value2)
    setResult(v1 + v2)
  }

  return (
    //Fragment
    <> 
    <h1>Anyeong, sesanga!!</h1>
    <input type = "text" placeholder="First value" onChange = {handleChange}/>         {/* inline elements */}
    {/*onChange = {(e) => handleChange(e,'value1')}/>*/}
    <input type = "text" placeholder="Second value" onChange = {handleChange1}/>
    {/*onChange = {(e) => handleChange1(e,'value2')}/> */}  
    <button onClick={handleClick}>Add</button>
    <p>Answer:{result}</p>        {/* paragragh elements so it will go in block level and goes to next line 8 */}
    </>

  )
}

export default App