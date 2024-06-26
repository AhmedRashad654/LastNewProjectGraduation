import React, { useState } from "react";
import "./products.css";
import { Button } from "react-bootstrap";
import { request } from "../../axios/axios";
import ProductItem from "../ProductItem/ProductItem";
import { useQuery } from "react-query";

function Products() {
  const [hoverProduct, setHoverProduct] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  function getProductPagination() {
    return request.get(`/products/pagination/${currentPage}/8`);
  }
  const { data } = useQuery(
    ["getProductPagination", currentPage],
    () => getProductPagination(currentPage),
    {
      keepPreviousData: true,
    }
  );
  const handleMouseOver = (productId) => {
    setHoverProduct(productId);
  };

  const handleMouseOut = () => {
    setHoverProduct(null);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div className="row">
        {data &&
          data?.data?.data?.map((product) => (
            <ProductItem
              key={product._id}
              product={product}
              hoverProduct={hoverProduct}
              handleMouseOver={handleMouseOver}
              handleMouseOut={ handleMouseOut }
              offer={false}
            />
          ))}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={handleNextPage} disabled={!data?.data?.hasNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Products;
