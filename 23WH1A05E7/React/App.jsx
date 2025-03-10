import { BrowserRouter, Routes, Route } from "react-router";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import AppLayout from "./components/layout/AppLayout/AppLayout"; // Assuming you have a layout component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
