import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all"); // Set default category to 'all'
  const cartItems = useSelector((state) => state.cartItems || []); // Ensure you're referencing correctly
  const cartItemCount = cartItems.length;
  // Function to update search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Function to update selected category
  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update the selected category
    setSearchTerm(""); // Clear the search term when category is selected
  };
  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };

  // Simulate loading time with useEffect
  useEffect(() => {
    // Mock API call or delay to show the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set a delay of 2 seconds or until content is loaded

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (loading) {
    return (
      <div className="loading-screen flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="w-24 h-24 border-4 border-blue-300 border-dashed rounded-full animate-spin"></div>
      <h2 className="mt-4 text-lg font-semibold text-gray-700">Loading your experience...</h2>
    </div>
    
    );
  }
  return (
    <div className="App">
      {/* Render Header always */}
      <Header
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
        cartItemCount={cartItemCount}
      />

      {/* Render the rest of the components using Outlet */}
      <Outlet context={{ searchTerm, selectedCategory }} />

      {/* Render Header always */}
      <Footer />
    </div>
  );
}

export default App;
