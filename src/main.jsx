import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"; // Import Tailwind CSS
import { store } from "./redux/store";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import HeroSection from "./components/HeroSection.jsx";

const About = lazy(() => import("./components/AboutUs.jsx"));
const Contact = lazy(() => import("./components/ContactUs.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This will render the Header component
    children: [
      {
        path: "/",
        element: <HeroSection />, // Outlet will render ProductList here
      },
      {
        path: "product",
        element: <ProductList />, // Outlet will render ProductList here
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: (
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500 mb-4"></div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Loading...
                </h2>
                <p className="text-gray-500">
                  Please wait while we load your content.
                </p>
              </div>
            }
          >
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500 mb-4"></div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Loading...
                </h2>
                <p className="text-gray-500">
                  Please wait while we load your content.
                </p>
              </div>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500 mb-4"></div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Loading...
                </h2>
                <p className="text-gray-500">
                  Please wait while we load your content.
                </p>
              </div>
            }
          >
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500 mb-4"></div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  Loading...
                </h2>
                <p className="text-gray-500">
                  Please wait while we load your content.
                </p>
              </div>
            }
          >
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
