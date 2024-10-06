import React from "react";

function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 md:px-0">
      <div className="w-full max-w-4xl mx-auto p-10 bg-white shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-2">
        {/* Left - Contact Form (Non-Functional) */}
        <div className="p-8 bg-gray-50 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions, feel free to reach out to us!
          </p>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="John Doe"
                disabled
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="example@domain.com"
                disabled
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="5"
                placeholder="Write your message here..."
                disabled
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 cursor-not-allowed"
                disabled
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right - Contact Information */}
        <div className="p-8 bg-gray-900 text-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <i className="fa-solid fa-phone text-yellow-400 text-xl mr-4"></i>
              <span className="text-lg">+123 456 7890</span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-envelope text-yellow-400 text-xl mr-4"></i>
              <span className="text-lg">support@shoppyglobe.com</span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-map-marker-alt text-yellow-400 text-xl mr-4"></i>
              <span className="text-lg">123 Main St, City, Country</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                <i className="fa-brands fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                <i className="fa-brands fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                <i className="fa-brands fa-linkedin-in text-2xl"></i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
