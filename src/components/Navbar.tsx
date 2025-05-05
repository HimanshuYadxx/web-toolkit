
import { Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="py-4 border-b sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">PDF</span>
            <span className="text-2xl font-bold">ixit</span>
          </Link>

          <nav className="hidden md:flex ml-8">
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-sm font-medium text-foreground hover:text-primary">All Tools</Link></li>
              <li><Link to="/?category=PDF" className="text-sm font-medium text-foreground hover:text-primary">PDF</Link></li>
              <li><Link to="/?category=Image" className="text-sm font-medium text-foreground hover:text-primary">Image</Link></li>
              <li><Link to="/?category=Video" className="text-sm font-medium text-foreground hover:text-primary">Video</Link></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden sm:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search tools..." 
              className="pl-10 pr-4 py-2 rounded-full text-sm bg-secondary focus:outline-none focus:ring-1 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

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
              <li><Link to="/" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>All Tools</Link></li>
              <li><Link to="/?category=PDF" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>PDF</Link></li>
              <li><Link to="/?category=Image" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Image</Link></li>
              <li><Link to="/?category=Video" className="block py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Video</Link></li>
            </ul>
            <form onSubmit={handleSearch} className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search tools..." 
                className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
