
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b sticky top-0 bg-background z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Tiny</span>
            <span className="text-2xl font-bold">Wow</span>
          </a>

          <nav className="hidden md:flex ml-8">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-sm font-medium text-foreground hover:text-primary">All Tools</a></li>
              <li><a href="#" className="text-sm font-medium text-foreground hover:text-primary">PDF</a></li>
              <li><a href="#" className="text-sm font-medium text-foreground hover:text-primary">Image</a></li>
              <li><a href="#" className="text-sm font-medium text-foreground hover:text-primary">Video</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search tools..." 
              className="pl-10 pr-4 py-2 rounded-full text-sm bg-secondary focus:outline-none focus:ring-1 focus:ring-primary" 
            />
          </div>

          <Button size="sm" variant="ghost">Log in</Button>
          <Button size="sm">Sign up</Button>

          <button onClick={toggleMenu} className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-background border-t">
          <nav>
            <ul className="space-y-2 py-2">
              <li><a href="#" className="block py-2 text-foreground hover:text-primary">All Tools</a></li>
              <li><a href="#" className="block py-2 text-foreground hover:text-primary">PDF</a></li>
              <li><a href="#" className="block py-2 text-foreground hover:text-primary">Image</a></li>
              <li><a href="#" className="block py-2 text-foreground hover:text-primary">Video</a></li>
            </ul>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search tools..." 
                className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-secondary focus:outline-none focus:ring-1 focus:ring-primary" 
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
