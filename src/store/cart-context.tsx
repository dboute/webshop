import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item, deleteALl) => {},
  clearCart: () => {}
});

export default CartContext;
