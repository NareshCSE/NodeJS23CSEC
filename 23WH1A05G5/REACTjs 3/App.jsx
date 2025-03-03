// import React from "react";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Header from "./components/layout/Header/Header";
// import Footer from "./components/layout/Footer/Footer";



// const App = () => {
//   return (
//     //Fragment
//     <>
//     <Header/>
//     <Home/>
//     <Footer/>
   
//     </>
//     // what ever we write here that content will open
//   );
// };

// export default App;


//now i want to clear all above content and writing new code now so all commented

import { BrowserRouter ,Routes, Route } from "react-router" //BrowserRouter says that it we are using url and it changes from one page to another
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Result from "./pages/Result"
import AppLayout from "./components/layout/AppLayout/AppLayout"

const App=() => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path ='/*' element ={<AppLayout/>}>
          <Route index element={<Home/>}/> this is for default home page 
          <Route path='home' element={<Home/>}/> 
          <Route path='about' element={<About />}/> 
          <Route path='services' element={<Services />}/> 
          <Route path='contact' element={<Contact />}/> 
          <Route path='result' element={<Result/>}/>
          
        </Route> 
      {/*write  here if u dont want header footer for result <Route path='/result' element={<Result/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;







