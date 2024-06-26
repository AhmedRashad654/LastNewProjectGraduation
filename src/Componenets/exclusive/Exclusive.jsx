
import React, { useState } from "react";
import { request } from "../../axios/axios";
import ProductItem from "../ProductItem/ProductItem";
import { useQuery } from "react-query";

function Exclusive() {
  const [hoverProduct, setHoverProduct] = useState(null);

  // Function to fetch all products
  function getAllProducts() {
    return request.get(`/products/exclusive`);
  }

  const { data } = useQuery("getAllProducts", getAllProducts);

  const handleMouseOver = (productId) => {
    setHoverProduct(productId);
  };

  const handleMouseOut = () => {
    setHoverProduct(null);
  };



  return (
    <div className="row" >
      {data?.data?.data?.length > 0 ? (
        data?.data?.data?.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            hoverProduct={hoverProduct}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
            isExclusive={true}
          />
        ))
      ) : (
        <h1 className="text-center w-full">No exclusive products here</h1>
      )}
    </div>
  );
}

export default Exclusive;
