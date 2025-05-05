
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="container relative px-4 py-12 md:py-20 lg:py-24 lg:px-8 flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-accent/80 backdrop-blur-sm rounded-full mb-4 animate-fade-in">
          100% Free Online Tools
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "150ms" }}>
          Make <span className="text-black">PDFixit</span> Solutions <span className="text-primary">Simple</span>!
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          Simple, free online tools to help with all your PDF, image, video, and document conversions. 
          Over 40 powerful tools with no registration, no downloads, no file size limits.
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
