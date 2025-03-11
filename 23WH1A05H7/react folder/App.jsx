import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}
