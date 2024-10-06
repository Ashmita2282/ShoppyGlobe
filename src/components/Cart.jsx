import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/actions";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch remove from cart action
  };

  const handleIncrease = (itemId) => {
    dispatch(increaseQuantity(itemId)); // Dispatch increase quantity action
  };

  const handleDecrease = (itemId) => {
    dispatch(decreaseQuantity(itemId)); // Dispatch decrease quantity action
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Beautiful Header */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg shadow-black mt-6 mb-8 text-center">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-lg font-semibold text-gray-500 mt-8">
            Your cart is empty. Explore products to add to your cart!
          </p>
          <Link to="/product" className="bg-yellow-400 text-center mt-8 rounded-lg">
            <button className="italic text black text-lg p-2 font-semibold rounded-lg">
              Explore products
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
          {/* Mapping cart items */}
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          ))}

          {/* Total Section */}
          <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4 mt-4">
            <p className="text-lg font-semibold">
              Total Items: {cartItems.length}
            </p>
            <Link to="/checkout">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors shadow-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
