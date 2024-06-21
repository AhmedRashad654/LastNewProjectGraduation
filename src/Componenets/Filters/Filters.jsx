// src/components/Filters/Filters.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Button } from 'react-bootstrap';
import NotFound from '../NotFound/NotFound';
import formatCurrency from '../formatcurrency';

const Filters = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { increaseQuantity, decreaseQuantity, removeItem, getItemsQuantity } = useShoppingCart();

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(res => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (query) {
      setFilteredProducts(
        products.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [query, products]);

  return (
    <div className="container">
      <h2>Filtered Products</h2>
      {filteredProducts.length === 0 ? (
        <NotFound />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {filteredProducts.map((item) => (
            <div key={item.id} className="card">
              <img src={item.images[0]} className="card-img-top object-cover h-48 w-full" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p>ID: {item.id}</p>
                <p>Price: {formatCurrency(item.price)}</p>
                <p>{item.description}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <Button onClick={() => decreaseQuantity(item.id)} size='sm'>-</Button>
                  <span>{getItemsQuantity(item.id)} in cart</span>
                  <Button onClick={() => increaseQuantity(item.id, item.title, item.price, item.images[0], item.description)} size='sm'>+</Button>
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
