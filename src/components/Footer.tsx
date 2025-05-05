
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">PDF</span>
                <span className="text-2xl font-bold">ixit</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Simple online tools to make everyday tasks easier. Free, fast, and no registration required.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4S21 4 12 4 2 4 2 4l7 8-7 8s1 0 10 0 10 0 10 0l-7-8 7-8z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tool/pdf-compress" className="text-muted-foreground hover:text-primary">PDF Tools</Link></li>
              <li><Link to="/tool/image-compress" className="text-muted-foreground hover:text-primary">Image Tools</Link></li>
              <li><Link to="/tool/video-compress" className="text-muted-foreground hover:text-primary">Video Tools</Link></li>
              <li><Link to="/tool/word-to-pdf" className="text-muted-foreground hover:text-primary">File Converters</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-primary">All Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><a href="https://blog.pdfixit.example.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
              <li><Link to="/privacy#security" className="text-muted-foreground hover:text-primary">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 PDFixit. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Help Center
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Support
            </Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
