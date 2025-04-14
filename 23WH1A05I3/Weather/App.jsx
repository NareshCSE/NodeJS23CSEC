import { BrowserRouter ,Routes , Route} from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Result from "./pages/result"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Weather from "./pages/weather"
import Data from "./pages/Data"
import Cart from "./pages/Cart"
import AppLayout from "./components/layout/AppLayout/AppLayout"
import Submit from "./pages/Submit"


const App = () =>{
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/*' element={<AppLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='result' element={<Result/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path='Register' element={<Register/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Weather' element={<Weather/>}/>
      <Route path='Data' element={<Data/>}/>
      <Route path='Cart' element={<Cart/>}/>
      <Route path='Submit' element={<Submit/>}/>
      </Route>
  
      
     </Routes>
    </BrowserRouter>
  )
}
export default App
