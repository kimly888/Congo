import React from "react";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = ({open, setOpen}) => {
  return (
    <div>
      <Navbar open={open} setOpen={setOpen}/>
      <Hero />
      <Products/>
    </div>
  );
};

export default Home;
