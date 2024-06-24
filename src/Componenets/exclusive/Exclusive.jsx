
import React, { useState } from "react";
import { request } from "../../axios/axios";
import ProductItem from "../ProductItem/ProductItem";
import { useQuery } from "react-query";

function Exclusive() {
  const [hoverProduct, setHoverProduct] = useState(null);

  // Function to fetch all products
  function getAllProducts() {
    return request.get(`/products`);
  }

  const { data } = useQuery("getAllProducts", getAllProducts);

  const handleMouseOver = (productId) => {
    setHoverProduct(productId);
  };

  const handleMouseOut = () => {
    setHoverProduct(null);
  };

  // Filter products to only include those with isExclusive == true
  const exclusiveProducts =
    data?.data?.data?.filter((product) => product.isExclusive) || [];

  return (
    <div>
       
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
        {exclusiveProducts.length > 0 ? (
          exclusiveProducts.map((product) => (
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
          <h1 className="text-center w-100">No exclusive products here</h1>
        )}
      </div>
    </div>
  );
}

export default Exclusive;
