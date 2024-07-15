import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PricingSection from "./components/PricingSection";
import VideoSection from "./components/VideoSection";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import ErrorPage from "./pages/ErrorPage";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center gap-2 lg:gap-12 bg-gradient-to-br from-[#FFBBEC] to-[#DDD6F3] h-full w-full">
      <Header />
      <FeaturesSection />
      <VideoSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="flex flex-col justify-center gap-2 lg:gap-12 bg-gradient-to-br from-[#FFBBEC] to-[#DDD6F3] h-full w-full">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
};

const BlogDetailPage = () => {
  return (
    <div className="flex flex-col justify-center gap-2 lg:gap-12 bg-gradient-to-br from-[#FFBBEC] to-[#DDD6F3] h-full w-full">
      <Header />
      <BlogDetail />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:slug",
    element: <BlogDetailPage />,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
