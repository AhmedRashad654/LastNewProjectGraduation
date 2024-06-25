import React, { useEffect, useState } from "react";
import "./bestseller.css";
import { request } from "../../axios/axios";
import { url } from "../../axios/axios";

function Bestseller() {
  const [products, setProducts] = useState([]);




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



  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product._id}>
            <div className="best">
             <img src={`${url}/img/${product.image}`} className="w-100"/> 
             <div className=" d-flex justify-content-between m-5">
              <p className=" fw-bold">{product.name.split(" ").slice(0,3).join(" ")}</p>
              <p className=" text-red-700 fw-bold">{product.price}$</p>
             </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
