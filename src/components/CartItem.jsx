import React from "react";
import Altimg from "../assets/download.jpeg";

function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b py-4 bg-white shadow-lg rounded-lg p-4 mb-4">
      {/* Product Image */}
      <div className="md:w-1/4 w-full mb-4 md:mb-0">
        <img
          src={
            item.images && item.images.length > 0
              ? item.images[0]
              : Altimg
          }
          alt={item.title}
          className="h-48 w-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
        <p className="text-gray-600 mt-2">
          Price: <span className="font-semibold">${item.price}</span>
        </p>

        {/* Quantity Controls */}
        <div className="flex justify-center md:justify-start items-center mt-4">
          <button
            onClick={() => onDecrease(item.id)}
            className={`bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md transition-colors hover:bg-gray-300 ${
              item.quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={item.quantity === 1} // Disable if quantity is 1
          >
            -
          </button>
          <span className="mx-4 text-gray-800 text-lg font-semibold">
            {item.quantity}
          </span>
          <button
            onClick={() => onIncrease(item.id)}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md transition-colors hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <div className="md:w-1/6 w-full flex justify-center md:justify-end mt-4 md:mt-0">
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 font-semibold bg-red-100 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors shadow-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
