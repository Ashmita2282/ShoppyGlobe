import React from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import { useOutletContext } from "react-router-dom"; // Ensure only useOutletContext is imported

function ProductList() {
  const { searchTerm, selectedCategory } = useOutletContext(); // Get searchTerm and selectedCategory from Outlet context
  const { products, loading, error } = useFetchProducts(); // Custom hook

  // Filter products based on selected category and search term
  const filteredProducts = products.filter((product) => {
    const matchesSearch = !searchTerm || product.title.toLowerCase().includes(searchTerm.toLowerCase()); 
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
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
        <p className="text-center text-xl font-semibold text-gray-500 mt-10 animate-pulse">
          No products found.
        </p>
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
