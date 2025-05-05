
import { Facebook, Instagram, Twitter, Youtube, FileText, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <Link to="/" className="inline-flex items-center mb-4">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-black" />
                <Wrench className="h-4 w-4 text-black -ml-1" />
                <span className="ml-2 text-xl font-bold text-black">PD<span className="text-primary">Fixit</span></span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Free online tools for all your file conversion and editing needs. Simple, fast, and secure.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/?category=PDF" className="text-muted-foreground hover:text-primary transition-colors">PDF Tools</Link></li>
              <li><Link to="/?category=Image" className="text-muted-foreground hover:text-primary transition-colors">Image Tools</Link></li>
              <li><Link to="/?category=Video" className="text-muted-foreground hover:text-primary transition-colors">Video Tools</Link></li>
              <li><Link to="/?category=Convert" className="text-muted-foreground hover:text-primary transition-colors">File Converters</Link></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/60 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PDFixit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
