import {useEffect, useReducer} from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
  totalAmount: Number(localStorage.getItem("totalAmount")) || 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id && item.color === action.item.color
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      localStorage.setItem('totalAmount', JSON.stringify(updatedTotalAmount));
      return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    let updatedItems, updatedTotalAmount;
    if (action.deleteALl || existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
      updatedTotalAmount = state.totalAmount - (existingItem.amount * existingItem.price);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      updatedTotalAmount = state.totalAmount - existingItem.price;
    }
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      localStorage.setItem('totalAmount', JSON.stringify(updatedTotalAmount));
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id, deleteALl) => {
    dispatchCartAction({ type: 'REMOVE', id: id, deleteALl:deleteALl});
  };

  const clearCartHandler = () => {
    dispatchCartAction({type: 'CLEAR'});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
