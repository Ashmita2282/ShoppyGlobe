import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from './actions';

const initialState = {
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Logic to add item to cart
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item => 
            item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload) {
            const newQuantity = item.quantity - 1;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
