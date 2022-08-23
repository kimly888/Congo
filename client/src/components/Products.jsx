import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import "./Styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="products-container">
      {products.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Products;
