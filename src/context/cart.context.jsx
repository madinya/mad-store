import { useEffect } from "react";
import { useState, createContext } from "react";

const _addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const _removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === productToRemove.id;
  });

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== existingItem.id;
    });
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const _clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(_addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(_removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(_clearCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
