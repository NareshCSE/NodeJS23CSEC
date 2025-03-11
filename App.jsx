
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import AppLayout from "./components/layout/AppLayout/AppLayout"
import Result from "./pages/Result"      

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        {/* slash * is for storing all routes under applayout, put path name in the tab in browser and check how it works */}
        <Route path='/*' element={<AppLayout />} >
          {/* single slash represents default route path */}
          <Route index element={<Contact />} />
          <Route path='home' element={<Home />} />
          <Route path='pappu_kaadu' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />

          <Route path='Result' element={<Result />} />

        </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App