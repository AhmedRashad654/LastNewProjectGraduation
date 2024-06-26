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
        {products.map((product) => (
          // <div className="col-md-3" key={product._id}>
          //   <div className="best">
          //    <img src={`${url}/img/${product.image}`} className="w-100" alt="Best"/>
          //    <div className=" d-flex justify-content-between m-5">
          //     <p className=" fw-bold">{product.name.split(" ").slice(0,3).join(" ")}</p>
          //     <p className=" text-red-700 fw-bold">{product.price}$</p>
          //    </div>
          //   </div>

          // </div>
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
