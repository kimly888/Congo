import React from "react";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero";

const Home = ({open, setOpen}) => {
  return (
    <div>
      <Navbar open={open} setOpen={setOpen}/>
      <Hero />
    </div>
  );
};

export default Home;
