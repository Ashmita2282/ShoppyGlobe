import React from "react";
import HeroImage from "../assets/homePage.jpg"; // Add your hero image path
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div
      className="hero-section h-screen bg-cover bg-center bg-no-repeat flex flex-col italic justify-center items-center"
      style={{ backgroundImage: `url(${HeroImage})` }} // Set background image here
    >
      <div className="bg-black m-5 bg-opacity-50 p-8 rounded-md text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShoppyGlobe</h1>
        <p className="text-xl">Discover amazing products and deals!</p>
      </div>
      <Link to={"/product"}>
        <button className="w-full m-5 max-w-md py-3 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg text-xl font-bold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500">
          Explore Our Products
        </button>
      </Link>
    </div>
  );
}

export default HeroSection;
