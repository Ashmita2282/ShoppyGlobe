import React from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import Altimg from "../assets/download.jpeg"; // Fallback image

function ProductDetail() {
  const { id } = useParams(); // Get product ID from the URL
  const location = useLocation(); // Get location object
  const navigate = useNavigate(); // Hook to navigate to other routes
  const product = location.state?.product; // Access passed product data

  // If the product is not passed, handle this case
  if (!product) {
    return <p className="text-red-500 text-center">Product not found.</p>;
  }

  // Handle "See More" button click to navigate to the product listing page
  const handleSeeMore = () => {
    navigate("/products"); // Assuming "/products" route takes the user to all products
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-lg max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{product.title}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={
            product.images && product.images.length > 0
              ? product.images[0]
              : Altimg
          }
          alt={product.title}
          className="w-80 h-80 object-cover mb-6 md:mr-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105"
        />
        <div className="flex flex-col">
          <p className="text-2xl text-gray-800 font-semibold mb-2">
            Price: <span className="text-blue-600">${product.price}</span>
          </p>
          <p className="text-gray-700 text-justify mb-6">
            {product.description}
          </p>
          <Link to={"/product"}>
            <button
              onClick={handleSeeMore}
              className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105"
            >
              See More Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
