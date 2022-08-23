import React from "react";
import Navbar from "../components/Header/Navbar";
import Products from "../components/Products";

const ProductsList = ({open, setOpen}) => {
  return (
    <div>
      <Navbar open={open} setOpen={setOpen}/>
      <Products/>
    </div>
  );
};

export default ProductsList;
