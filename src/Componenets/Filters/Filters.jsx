// src/components/Filters/Filters.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Button } from 'react-bootstrap';
import NotFound from '../NotFound/NotFound';

const Filters = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { increaseQuantity, decreaseQuantity, removeItem } = useShoppingCart();

  useEffect(() => {
    if (query) {
      axios.get(`https://api.escuelajs.co/api/v1/products`)
        .then(res => {
          const filteredProducts = res.data.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );
          setProducts(filteredProducts);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Filtered Products</h2>
      {products.length === 0 ? (
        <NotFound />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img src={item.images[0]} className="card-img-top object-cover h-48 w-full" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p>{item.price}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <Button onClick={() => decreaseQuantity(item.id)} size='sm'>-</Button>
                  <span>{item.quantity} in cart</span>
                  <Button onClick={() => increaseQuantity(item.id)} size='sm'>+</Button>
                </div>
                <Button onClick={() => removeItem(item.id)} variant="danger" className="mt-2">Remove</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
