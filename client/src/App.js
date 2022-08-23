import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Sign-up";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="home">
      <Home open={open} setOpen={setOpen} />
      {/* <Login /> */}
      {/* <Signup/> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
