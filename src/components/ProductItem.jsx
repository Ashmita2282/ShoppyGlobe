import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import Altimg from "../assets/download.jpeg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch add to cart action
  };

  const handleViewDetails = () => {
    // Navigate to product detail page with product's data
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={
          product.images && product.images.length > 0
            ? product.images[0]
            : Altimg
        }
        alt={product.title}
        className="h-48 w-full object-cover"
      />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p>Price: ${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 italic font-bold text-white p-2 rounded mt-2"
      >
        Add to Cart
      </button>
      <button
        onClick={handleViewDetails} // Call the function on click
        className="bg-green-500 italic font-bold text-white p-2 rounded mt-2 ml-2"
      >
        View Details
      </button>
    </div>
  );
}

export default ProductItem;