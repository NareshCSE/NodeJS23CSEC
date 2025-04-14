import { BrowserRouter, Routes ,Route} from "react-router"
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Registration from "./pages/Registartion"
import AppLayout from "./components/layout/AppLayout/AppLayout"
import Result from "./pages/Result1"
import Result2 from "./pages/Result2"
import Login from "./pages/Login"
import Result3 from "./pages/Result3"
import Cart from "./pages/Cart"

const App= () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<AppLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='registration' element={<Registration/>}/>
      <Route path='result1' element={<Result1/>}/>
      <Route path='result2' element={<Result2/>}/>
      <Route path='result3' element={<Result3/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='cart' element={<Cart/>}/>


      </Route>

    </Routes>
    </BrowserRouter>
  )
}
export default App