import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Button } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useShoppingCart();

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {cartItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} className="card-img-top object-cover h-48 w-full" alt={item.title} />
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

export default Cart;
