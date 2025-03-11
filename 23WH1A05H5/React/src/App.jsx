import { BrowserRouter, Routes, Route } from "react-router";
import Welcome from "./pages/welcome";
import Registration from "./pages/Registration";
import Login from "./pages/login";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import AppLayout from "./components/layout/AppLayout/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppLayout />}>
          <Route index element={<Welcome />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
