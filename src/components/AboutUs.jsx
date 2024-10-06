import React from "react";
import { Link } from "react-router-dom"; // Add this import
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";

function AboutUs() {
  return (
    <div className="bg-gray-100 py-10">
      {/* Hero Section */}
      <section className="bg-[#0a0b0b] text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold italic mb-4">About ShoppyGlobe</h1>
          <p className="text-lg text-gray-300 mx-auto max-w-2xl">
            We’re dedicated to bringing you the best products at unbeatable
            prices. At ShoppyGlobe, we focus on delivering top-quality products
            and an exceptional shopping experience to our customers.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mission */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center">
            To revolutionize online shopping by offering an unparalleled
            selection of products and delivering an exceptional user experience
            that creates lasting customer satisfaction.
          </p>
        </div>
        {/* Vision */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Our Vision
          </h2>
          <p className="text-gray-600 text-center">
            To become the go-to global marketplace where customers can find
            everything they need, with a guarantee of quality, convenience, and
            exceptional service.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold italic text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src={team2}
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-600 mb-4">CEO & Founder</p>
            <p className="text-sm text-gray-500">
              John has over 15 years of experience in e-commerce and tech,
              driving ShoppyGlobe towards excellence.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
               src={team1}
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
            <p className="text-gray-600 mb-4">Chief Marketing Officer</p>
            <p className="text-sm text-gray-500">
              Jane leads our marketing strategies with a keen eye for trends,
              ensuring ShoppyGlobe stays ahead in the industry.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src={team3}
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Michael Lee</h3>
            <p className="text-gray-600 mb-4">Head of Product Development</p>
            <p className="text-sm text-gray-500">
              Michael oversees our product development, ensuring that each
              product meets the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-400 py-12 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Want to Know More About Us?
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            Reach out to our team to learn more about ShoppyGlobe and how we can
            serve you better.
          </p>
          <Link to="/contact">
            <button className="bg-black text-yellow-400 py-3 px-8 rounded-lg font-bold hover:bg-gray-800">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
