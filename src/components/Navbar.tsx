
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToCategory = (category: string) => {
    navigate(`/?category=${category}`);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? "py-2 bg-background/95 backdrop-blur-lg shadow-sm" : "py-4 bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-black">PDFixit</span>
          </Link>

          <nav className="hidden md:flex ml-8">
            <ul className="flex space-x-6">
              <li><button onClick={scrollToTools} className="text-sm font-medium text-foreground hover:text-primary transition-colors">All Tools</button></li>
              <li><button onClick={() => navigateToCategory('PDF')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">PDF</button></li>
              <li><button onClick={() => navigateToCategory('Image')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Image</button></li>
              <li><button onClick={() => navigateToCategory('Video')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Video</button></li>
              <li><button onClick={() => navigateToCategory('Convert')} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Convert</button></li>
              <li><Link to="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden sm:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search tools..." 
              className="pl-10 pr-4 py-2 rounded-full text-sm bg-secondary focus:outline-none focus:ring-1 focus:ring-primary w-[180px] md:w-[220px] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/95 z-40 md:hidden flex flex-col pt-20">
          <div className="px-4 py-6 space-y-6 flex-1 overflow-y-auto">
            <nav>
              <ul className="space-y-4">
                <li><button onClick={scrollToTools} className="block w-full text-left text-lg font-medium text-foreground hover:text-primary">All Tools</button></li>
                <li><button onClick={() => navigateToCategory('PDF')} className="block w-full text-left text-lg font-medium text-foreground hover:text-primary">PDF Tools</button></li>
                <li><button onClick={() => navigateToCategory('Image')} className="block w-full text-left text-lg font-medium text-foreground hover:text-primary">Image Tools</button></li>
                <li><button onClick={() => navigateToCategory('Video')} className="block w-full text-left text-lg font-medium text-foreground hover:text-primary">Video Tools</button></li>
                <li><button onClick={() => navigateToCategory('Convert')} className="block w-full text-left text-lg font-medium text-foreground hover:text-primary">File Converters</button></li>
                <li><Link to="/blog" className="block text-lg font-medium text-foreground hover:text-primary">Blog</Link></li>
              </ul>

              <div className="h-px bg-border my-6"></div>

              <ul className="space-y-4">
                <li><Link to="/about" className="block text-base text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="block text-base text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link to="/faq" className="block text-base text-muted-foreground hover:text-primary">FAQ</Link></li>
                <li><Link to="/help" className="block text-base text-muted-foreground hover:text-primary">Help Center</Link></li>
                <li><Link to="/support" className="block text-base text-muted-foreground hover:text-primary">Support</Link></li>
              </ul>
            </nav>

            <form onSubmit={handleSearch} className="relative mt-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search tools..." 
                className="w-full pl-10 pr-4 py-3 rounded-full text-base bg-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
