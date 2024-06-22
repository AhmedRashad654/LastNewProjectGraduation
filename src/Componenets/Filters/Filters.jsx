// src/components/Filters/Filters.js
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button } from "react-bootstrap";
import NotFound from "../NotFound/NotFound";
import { request, url } from "../../axios/axios";
import Loading from "../../ui/Loading";
import { useSearch } from "../context/SearchContext";

const Filters = () => {
  const { searchQuery } = useSearch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { increaseQuantity, decreaseQuantity, removeItem, getItemsQuantity } =
    useShoppingCart();

  useEffect(() => {
    if (searchQuery) {
      request
        .get(`/products/search?name=${searchQuery}`)
        .then((result) => {
          setProducts(result?.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } 
  }, [searchQuery]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="containe">
      <h3 className="my-3 font-bold">Filtered Products</h3>
      {products.length === 0 ? (
        <NotFound />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_250px))]  gap-4">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img
                src={`${url}/img/${item.image}`}
                className="card-img-top object-cover h-48 w-full"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>{item.price}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <Button onClick={() => decreaseQuantity(item)} size="sm">
                    -
                  </Button>

                  <span>{getItemsQuantity(item._id)} in cart</span>
                  <Button onClick={() => increaseQuantity(item)} size="sm">
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => removeItem(item)}
                  variant="danger"
                  className="mt-2"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
