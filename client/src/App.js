import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Sign-up";
import ProductsList from "./pages/ProductsList";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home open={open} setOpen={setOpen} />} />
          <Route path="/api/cart" element={<Cart />} />
          <Route
            path="/api/products"
            element={<ProductsList open={open} setOpen={setOpen} />}
          />
          <Route path="/api/auth/login" element={<Login />} />
          <Route path="/api/auth/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
