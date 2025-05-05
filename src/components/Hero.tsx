
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="container relative px-4 py-12 md:py-20 lg:py-24 lg:px-8 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6 animate-fade-in">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-black">PD<span className="text-primary">Fixit</span></span>
          </Link>
        </div>
        
        <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-accent/80 backdrop-blur-sm rounded-full mb-4 animate-fade-in">
          100% Free Online Tools
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "150ms" }}>
          Make <span className="text-black">PDFixit</span> Solutions <span className="text-primary">Simple</span>!
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          Simple, free online tools to help with all your PDF conversions, compressions, and more. No registration required, just fast and easy solutions.
        </p>

        {/* Menu Section */}
        <div className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: "450ms" }}>
          <Link to="/?category=PDF" className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition-all hover:-translate-y-1 duration-200">
            <div className="text-primary mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <h3 className="font-medium">PDF Tools</h3>
          </Link>
          
          <Link to="/?category=Image" className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition-all hover:-translate-y-1 duration-200">
            <div className="text-primary mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
            </div>
            <h3 className="font-medium">Image Tools</h3>
          </Link>
          
          <Link to="/?category=Video" className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition-all hover:-translate-y-1 duration-200">
            <div className="text-primary mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 8-6 4 6 4V8Z"/>
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
              </svg>
            </div>
            <h3 className="font-medium">Video Tools</h3>
          </Link>
          
          <Link to="/?category=Convert" className="bg-white shadow-md hover:shadow-lg rounded-lg p-4 transition-all hover:-translate-y-1 duration-200">
            <div className="text-primary mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"/>
              </svg>
            </div>
            <h3 className="font-medium">File Converters</h3>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="hidden md:block absolute -right-16 top-20 w-32 h-32 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="hidden md:block absolute -left-8 bottom-12 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="hidden md:block absolute right-1/4 bottom-4 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
    </div>
  );
};

export default Hero;
