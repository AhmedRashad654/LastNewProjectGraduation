
import React, { useState } from "react";
import { request } from "../../axios/axios";
import ProductItem from "../ProductItem/ProductItem";
import { useQuery } from "react-query";

function Offres() {
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

  // Filter products to only include those with offres == true
  const offresProducts =
    data?.data?.data?.filter((product) => product.offres) || [];

  return (
    <div>
       
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
        {offresProducts.length > 0 ? (
          offresProducts.map((product) => (
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
          <h1 className="text-center w-100">No offers products here</h1>
        )}
      </div>
    </div>
  );
}

export default Offres;
