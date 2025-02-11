//defining a functional component 
import {useState} from 'react' //for useState fn
import "./App.css" //to import the css App
//state:an object that would store info/data in component

const App=()=>{ //arrow function
  const [value1,setValue1]=useState() 
  const [value2,setValue2]=useState()
  const [result,setResult]=useState()

  //definition for handeChange
  const handleChange=(event)=>{
    console.log(event.target.value)
    setValue1(event.target.value)
  }
  const handleChange1=(event)=>{
    setValue2(event.target.value)
  }
  //instead of two or many function we can usse:
  
  /*const handleChange=(event , type)=>{
    if(type=='value1')
      setValue1(event.target.value)
    else if(type==='value2')
      setValue2(event.target.value)
}*/
  const handleClick=()=>{
    let v1=parseInt(value1)
    let v2=parseInt(value2)
    setResult(v1+v2)
  }

  return ( //jsx format inside paranthesis. 
    <> {/*empty tag is fragement*/}
      <h1>Hello yasasvi!!</h1>
      
    <input type="text" placeholder="input1" onChange={handleChange}/> {/*onChange={(e)=>handleChange(e,'value1')} -callback fn :in onchange*/}
    <input type="text" placeholder="input2"onChange={handleChange1}/> 
    <button onClick={handleClick}>ADD</button>
    <p>Answer:{result}</p> {/* paragraph gives new line */}
    </>
  )
}

export default App // to let the main know about the app ig