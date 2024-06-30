import React, { useEffect, useState } from "react";
import "./bestseller.css";
import { request } from "../../axios/axios";
import ProductItem from "../ProductItem/ProductItem";

function Bestseller() {
  const [products, setProducts] = useState([]);
 const [hoverProduct, setHoverProduct] = useState(null);
  useEffect(() => {
    request
      .get("/products/bestSelling")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
 const handleMouseOver = (productId) => {
   setHoverProduct(productId);
 };

 const handleMouseOut = () => {
   setHoverProduct(null);
 };
  return (
    <div>
      <div className="row">
        { products.map( ( product ) => (
         
          <ProductItem
            key={product._id}
            product={product}
            hoverProduct={hoverProduct}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
            offer={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
