import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (!existingItem) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((currItems) => {
      const updatedItems = currItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      return updatedItems;
    });
  };

  const removeItem = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        getTotalQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
