
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
       
       <div className="container mx-auto mt-3">
      <div className="flex flex-wrap -mx-3">
        {exclusiveProducts.length > 0 ? (
          exclusiveProducts.map((product) => (
            <div
              key={product._id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 mb-6"
            >
              <ProductItem
                product={product}
                hoverProduct={hoverProduct}
                handleMouseOver={handleMouseOver}
                handleMouseOut={handleMouseOut}
                isExclusive={true}
              />
            </div>
          ))
        ) : (
          <h1 className="text-center w-full">No exclusive products here</h1>
        )}
      </div>
    </div>
    </div>
  );
}

export default Exclusive;
