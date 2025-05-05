
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container py-12">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground mb-6 hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
              How we handle your data and protect your privacy.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="prose prose-lg max-w-3xl">
            <h2>Privacy Policy</h2>
            <p>Last updated: May 5, 2025</p>
            
            <h3>1. Introduction</h3>
            <p>
              PDFixit ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            
            <h3>2. Information We Collect</h3>
            <p>
              <strong>Files You Upload:</strong> When you use our tools, we temporarily process the files you upload to provide our services.
            </p>
            <p>
              <strong>Usage Data:</strong> We collect information about how you interact with our website, such as the pages you visit and the actions you take.
            </p>
            
            <h3>3. How We Use Your Information</h3>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve our website and user experience</li>
              <li>Monitor usage and analyze trends</li>
              <li>Detect and prevent technical issues</li>
            </ul>
            
            <h3>4. File Security & Retention</h3>
            <p>
              Files uploaded to our platform are temporarily stored to process your request. All files are automatically deleted after 24 hours. We do not share your files with third parties.
            </p>
            
            <h3>5. Cookies</h3>
            <p>
              We use cookies to enhance your experience on our website. You can set your browser to refuse all or some browser cookies, but this may prevent some parts of our website from functioning properly.
            </p>
            
            <h3>6. Third-Party Services</h3>
            <p>
              Our website may include advertisements from third parties that may use cookies or similar technologies. We do not control these third parties' tracking technologies or how they may be used.
            </p>
            
            <h3>7. Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, please contact us at privacy@pdfixit.example.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
