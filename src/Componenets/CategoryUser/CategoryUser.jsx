import React, { useState } from "react";
import HeaderCategory from "../HeaderCategory/HeaderCategory";
import { useLocation, useParams } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import { request } from "../../axios/axios";
import { useQuery } from "react-query";
import {  useSelector } from "react-redux";

export default function CategoryUser() {
  const { id } = useParams();
  const { state } = useLocation();
  const [hoverProduct, setHoverProduct] = useState(null);

  const favoriteProducts = useSelector(
    (state) => state.favoriteproducts.products
    );
  /////////////////

  const isFavorite = (product) => {
    return favoriteProducts.some((favProduct) => favProduct.id === product.id);
  };
  const handleMouseOver = (productId) => {
    setHoverProduct(productId);
  };

  const handleMouseOut = () => {
    setHoverProduct(null);
  };
  ////////////////

  function getProductCategory() {
    return request.get(`/products/category/${id}`);
  }
  const { data } = useQuery(["getProductCategory",id], getProductCategory);

  return (
    <div>
      <HeaderCategory />
      <div>
        <div className="text-gray-500 my-3">
          Home / <span className="text-black">{state?.name}</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))]  gap-4">
          {data?.data?.data?.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              hoverProduct={hoverProduct}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
              isFavorite={isFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
