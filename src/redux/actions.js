// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

// Action creator to add an item to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Action creator to remove an item from the cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Action creator to increase the quantity of an item in the cart
export const increaseQuantity = (productId) => ({
  type: INCREASE_QUANTITY,
  payload: productId,
});

// Action creator to decrease the quantity of an item in the cart
export const decreaseQuantity = (productId) => ({
  type: DECREASE_QUANTITY,
  payload: productId,
});
