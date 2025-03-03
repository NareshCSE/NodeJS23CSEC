import { BrowserRouter, Routes, Route} from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import AppLayout from "./components/layout/AppLayout/AppLayout"
import Result from "./pages/Result"

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<AppLayout />}>
      <Route index element={<Home />} />
     <Route path='home' element={<Home />} />
     <Route path='about' element={<About />} />
     <Route path='services' element={<Services />} />
     <Route path='contact' element={<Contact />} />
     <Route path='result' element={<Result/>} />
      </Route>
    
    </Routes>
    </BrowserRouter>

  )
}
export default App
