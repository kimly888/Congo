import "./App.css";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";

function App() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      {/* <Login /> */}
    </div>
  );
}

export default App;
