
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found - PDFixit</title>
        <meta name="description" content="The page you are looking for doesn't exist." />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-primary/30">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">Page not found</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
