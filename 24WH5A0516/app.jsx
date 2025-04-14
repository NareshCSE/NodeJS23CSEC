
import {BrowserRouter,Routes,Route} from "react-router";
import AppLayout from "./components/layout/AppLayout/AppLayout"
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Result from "./pages/Result";
const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path ='/*' element={<AppLayout/>}>
      <Route index element={<Home/>}/>
      <Route path = 'Home' element ={<Home/>}/>
      <Route path = 'About' element = {<About/>}/>
      <Route path="Services" element={<Services/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Result" element={<Result/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
