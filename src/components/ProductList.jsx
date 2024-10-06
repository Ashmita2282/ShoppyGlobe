import React from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import { Link, useOutletContext } from "react-router-dom"; // Ensure only useOutletContext is imported

function ProductList() {
  const { searchTerm, selectedCategory } = useOutletContext(); // Get searchTerm and selectedCategory from Outlet context
  const { products, loading, error } = useFetchProducts(); // Custom hook

  // Filter products based on selected category and search term
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !searchTerm ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // const filteredProducts = products.filter((product) => {
  //   const matchesSearch = product.title
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  //   const matchesCategory =
  //     selectedCategory === "all" || product.category === selectedCategory;
  //   return matchesSearch && matchesCategory;
  // });

  return (
    <div className="p-4">
      {loading && (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Oops! No Products Found
            </h2>
            <p className="text-gray-500 mb-6">
              We couldn't find any products matching your criteria.
            </p>
            <Link to={"/"}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                Back to Home
              </button>
            </Link>
            <p className="text-gray-400 mt-6 animate-bounce">
              🔍 Try adjusting your search or filter options.
            </p>
          </div>
        </div>
      )}

      {selectedCategory !== "home" && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 &&
            filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
