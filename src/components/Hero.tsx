
import { ArrowRight, Wrench, FilePdf } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="container relative px-4 py-12 md:py-20 lg:py-24 lg:px-8 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex items-center mb-6">
          <div className="flex items-center mr-2">
            <FilePdf className="h-8 w-8 text-black" />
            <Wrench className="h-6 w-6 text-black -ml-3 mt-3" />
          </div>
          <div className="font-sans font-bold text-2xl">
            <span className="text-black">PD</span>
            <span className="text-primary">Fixit</span>
          </div>
        </div>
        
        <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-accent/80 backdrop-blur-sm rounded-full mb-4 animate-fade-in">
          100% Free Online Tools
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "150ms" }}>
          Make <span className="text-black">PDFixit</span> Solutions <span className="text-primary">Simple</span>!
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          Simple, free online tools to help with all your PDF conversions, compressions, and more. No registration, no downloads, just fast and easy solutions.
        </p>

        {/* Decorative elements */}
        <div className="hidden md:block absolute -right-16 top-20 w-32 h-32 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="hidden md:block absolute -left-8 bottom-12 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="hidden md:block absolute right-1/4 bottom-4 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
    </div>
  );
};

export default Hero;
