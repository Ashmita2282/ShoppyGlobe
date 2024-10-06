import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-center mb-8">
          Proceed to Checkout
        </h1>

        {/* Cart Summary */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Order Summary
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              {/* Sample Cart Items */}
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Product 1</span>
                <span className="text-gray-900">$30.00</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Product 2</span>
                <span className="text-gray-900">$45.00</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Product 3</span>
                <span className="text-gray-900">$20.00</span>
              </div>

              {/* Total */}
              <div className="flex justify-between py-2 mt-4 text-xl font-semibold">
                <span>Total</span>
                <span>$95.00</span>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Payment Information
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              {/* Payment Details */}
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="1234 5678 9101 1121"
                />
              </div>
              <div className="flex justify-between mb-4">
                <div className="w-1/2 mr-2">
                  <label className="block text-gray-600 font-medium mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block text-gray-600 font-medium mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proceed to Checkout Button */}
        <div className="text-center mt-8 px-4 md:px-0">
          <Link to={"/"}>
            <button className="w-full md:max-w-md py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg text-lg md:text-xl font-bold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
