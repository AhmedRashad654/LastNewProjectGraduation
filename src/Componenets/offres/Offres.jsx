import React, { useState } from "react";
import { request } from "../../axios/axios";
import ProductItem from "../ProductItem/ProductItem";
import { useQuery } from "react-query";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

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
    <div className="row">
        {offresProducts.length > 0 ? (
          offresProducts.map((product) => (
           
              <ProductItem
                product={product}
                key={product._id}
                hoverProduct={hoverProduct}
                handleMouseOver={handleMouseOver}
                handleMouseOut={handleMouseOut}
                isExclusive={true}
              />
            
          ))
        ) : (
          <h1 className="text-center w-full">No offers products here</h1>
        )}
      
    </div>
  );
}

export default Offres;
