
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolGrid from "@/components/ToolGrid";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

const Index = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";
  const category = searchParams.get("category") || "all";
  
  // Scroll to top on param change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchQuery, category]);

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>PDFixit - Free Online PDF & Document Tools</title>
        <meta name="description" content="Free online tools for PDF compression, conversion, merging, splitting and more. No registration required." />
        <meta name="keywords" content="PDF tools, compress PDF, merge PDF, split PDF, convert PDF, free tools, online PDF editor" />
        <meta property="og:title" content="PDFixit - Free Online PDF & Document Tools" />
        <meta property="og:description" content="Free online tools for PDF compression, conversion, merging, splitting and more. No registration required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pdfixit.example.com" />
        <meta property="og:image" content="https://pdfixit.example.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PDFixit - Free Online PDF & Document Tools" />
        <meta name="twitter:description" content="Free online tools for PDF compression, conversion, merging, splitting and more. No registration required." />
        <link rel="canonical" href="https://pdfixit.example.com" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Top ad placement */}
        <AdBanner slot="1234567890" format="horizontal" className="container my-6" />
        
        <ToolGrid searchQuery={searchQuery} initialCategory={category} />
        
        {/* Middle ad placement */}
        <AdBanner slot="3854433005" className="container my-8" format="rectangle" />
        
        {/* Features section */}
        <section className="bg-secondary/30 py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Choose <span className="text-primary">PDFixit</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Easy to Use</h3>
                <p className="text-sm text-muted-foreground">No technical skills required. Our tools are designed to be simple and intuitive.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">100% Secure</h3>
                <p className="text-sm text-muted-foreground">Your files are processed securely and deleted automatically after 24 hours.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Fast Processing</h3>
                <p className="text-sm text-muted-foreground">Get your files processed quickly without waiting. Our tools are optimized for speed.</p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">No Registration</h3>
                <p className="text-sm text-muted-foreground">Use our tools without creating an account. No personal information required.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bottom ad placement */}
        <AdBanner slot="9876543210" className="container my-8" format="horizontal" />
        
        {/* CTA section */}
        <section className="py-16">
          <div className="container">
            <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your files?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Start using our free tools today and discover how easy it is to manage your PDF, image, and video files online!
                </p>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary/20 rounded-full"></div>
              <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
