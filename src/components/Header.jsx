import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import useFetchProducts from "../hooks/useFetchProducts";

function Header({ onSearch, onCategorySelect, cartItemCount }) { // Add cartItemCount prop
  const { loading, error } = useFetchProducts(); // Custom hook (no need for products here)
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle search action
  const handleSearch = () => {
    onSearch(searchTerm); // Call the onSearch function to update the App's state
    setSearchTerm(""); // Clear the input field after searching
  };

  // Toggle dropdown for mobile categories
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Header Section */}
      <header className="bg-[#0a0b0b] flex sm:justify-between items-center p-3 text-white w-full rounded-tl-lg rounded-tr-lg">
        {/* Logo Section */}
        <div className="flex items-center mb-3 sm:mb-0 ml-0 pl-0">
          <img src={logo} alt="ShoppyGlobe Logo" className="h-12 w-38 mr-3 ml-0 pl-0" />
        </div>

        {/* Search Bar (hidden on small screens) */}
        <div className="text-black font-semibold italic p-2 w-full sm:w-auto sm:flex sm:justify-start hidden md:flex">
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-tl-lg p-2"
          />
          <Link to={"/product"}>
            <button
              onClick={handleSearch}
              className="bg-yellow-400 rounded-br-lg italic p-2"
            >
              Search
            </button>
          </Link>
        </div>

        {/* Loading and Error States */}
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Home and Cart Buttons */}
        <div className="flex items-center">
          <Link to={"/"}>
            <button className="m-3 p-2 rounded italic font-bold text-yellow-400 text-xl  border">
              Home
            </button>
          </Link>
          <Link className="mx-2" to="/cart">
            <button className="relative text-yellow-400 p-3 border rounded">
              <i className="fa-solid fa-cart-shopping fa-xl sm:fa-2xl"></i>
              {cartItemCount > 0 && ( // Conditionally render badge
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </header>

      {/* Dropdown for Categories in Mobile */}
      <div className="sm:hidden bg-[#0a0b0b] p-3 text-white">
        <button
          onClick={toggleDropdown}
          className="w-full text-left font-semibold italic p-2 bg-yellow-400 rounded"
        >
          {isDropdownOpen ? "Hide Categories" : "Show Categories"}
        </button>
        {isDropdownOpen && (
          <div className="mt-2">
            <Link to="/product">
              <button
                onClick={() => onCategorySelect("all")}
                className="block w-full p-2 rounded italic font-semibold bg-yellow-400 mb-2"
              >
                All Products
              </button>
            </Link>
            <Link to="/product">
              <button
                onClick={() => onCategorySelect("beauty")}
                className="block w-full p-2 rounded italic font-semibold bg-yellow-400 mb-2"
              >
                Beauty Products
              </button>
            </Link>
            <Link to="/product">
              <button
                onClick={() => onCategorySelect("groceries")}
                className="block w-full p-2 rounded italic font-semibold bg-yellow-400 mb-2"
              >
                Grocery
              </button>
            </Link>
            <Link to="/product">
              <button
                onClick={() => onCategorySelect("fragrances")}
                className="block w-full p-2 rounded italic font-semibold bg-yellow-400 mb-2"
              >
                Fragrances
              </button>
            </Link>
            <Link to="/product">
              <button
                onClick={() => onCategorySelect("furniture")}
                className="block w-full p-2 rounded italic font-semibold bg-yellow-400"
              >
                Furniture
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Full Category List for Larger Screens */}
      <div className="hidden sm:flex bg-[#8f9898] justify-center p-3">
        <Link to="/product">
          <button
            onClick={() => onCategorySelect("all")}
            className={`m-3 p-2 rounded italic font-semibold ${
              onCategorySelect === "all" ? "bg-blue-500" : "bg-yellow-400"
            }`}
          >
            All Products
          </button>
        </Link>
        <Link to="/product">
          <button
            onClick={() => onCategorySelect("beauty")}
            className={`m-3 p-2 rounded italic font-semibold ${
              onCategorySelect === "beauty" ? "bg-blue-500" : "bg-yellow-400"
            }`}
          >
            Beauty Products
          </button>
        </Link>
        <Link to="/product">
          <button
            onClick={() => onCategorySelect("groceries")}
            className={`m-3 p-2 rounded italic font-semibold ${
              onCategorySelect === "groceries" ? "bg-blue-500" : "bg-yellow-400"
            }`}
          >
            Grocery
          </button>
        </Link>
        <Link to="/product">
          <button
            onClick={() => onCategorySelect("fragrances")}
            className={`m-3 p-2 rounded italic font-semibold ${
              onCategorySelect === "fragrances" ? "bg-blue-500" : "bg-yellow-400"
            }`}
          >
            Fragrances
          </button>
        </Link>
        <Link to="/product">
          <button
            onClick={() => onCategorySelect("furniture")}
            className={`m-3 p-2 rounded italic font-semibold ${
              onCategorySelect === "furniture" ? "bg-blue-500" : "bg-yellow-400"
            }`}
          >
            Furniture
          </button>
        </Link>
      </div>
    </>
  );
}

export default Header;
