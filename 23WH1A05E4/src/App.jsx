import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import SignUp from "./pages/SignUp";  // Keep this import only once
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import AppLayout from "./components/layout/AppLayout/AppLayout";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
