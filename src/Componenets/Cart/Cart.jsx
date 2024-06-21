// src/components/Cart/Cart.js
import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Button } from 'react-bootstrap';
import formatCurrency from '../formatcurrency';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem, products, calculateTotalPrice, totalPrice } = useShoppingCart();

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {cartItems.map((cartItem) => {
              const product = products.find(p => p.id === cartItem.id);
              if (!product) return null;

              return (
                <div key={cartItem.id} className="card">
                  <img src={product.images[0]} className="card-img-top object-cover h-48 w-full" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p>ID: {product.id}</p>
                    <p>Price: {formatCurrency(product.price)}</p>
                    <p>{product.description}</p>
                    <p>Total: {formatCurrency(product.price * cartItem.quantity)}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <Button onClick={() => decreaseQuantity(cartItem.id)} size='sm'>-</Button>
                      <span>{cartItem.quantity} in cart</span>
                      <Button onClick={() => increaseQuantity(cartItem.id, product.title, product.price, product.images[0], product.description)} size='sm'>+</Button>
                    </div>
                    <Button onClick={() => removeItem(cartItem.id)} variant="danger" className="mt-2">Remove</Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4">
            <Button onClick={calculateTotalPrice} variant="primary">Total Price</Button>
            {totalPrice > 0 && (
              <div className="mt-2">
                <h4>Total Price: {formatCurrency(totalPrice)}</h4>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
