import "./App.css";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Signup from "./components/Sign-up";

function App() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <Login /> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
