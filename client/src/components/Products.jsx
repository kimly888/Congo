import { products } from "../data";
import Product from "./Product";
import "./Styles/Products.css";

const Products = () => {
  return (
    <div className="products-container">
      {products.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Products;
