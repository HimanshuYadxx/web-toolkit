
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
            
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="prose prose-lg max-w-3xl">
            <h2>Terms of Service</h2>
            <p>Last updated: May 5, 2025</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using PDFixit ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>
            
            <h3>2. Description of Service</h3>
            <p>
              PDFixit provides online tools for file conversion, compression, and manipulation. The Service is provided "as is" and "as available" without warranties of any kind.
            </p>
            
            <h3>3. User Conduct</h3>
            <p>
              You agree not to use the Service to:
            </p>
            <ul>
              <li>Upload, process or share illegal content</li>
              <li>Infringe on intellectual property rights</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Interfere with or disrupt the integrity of the Service</li>
              <li>Use the Service for any purpose that violates applicable laws</li>
            </ul>
            
            <h3>4. Intellectual Property</h3>
            <p>
              All content, features, and functionality of the Service are the exclusive property of PDFixit and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h3>5. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, PDFixit shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use, the Service.
            </p>
            
            <h3>6. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on our website.
            </p>
            
            <h3>7. Contact</h3>
            <p>
              If you have any questions about these Terms, please contact us at terms@pdfixit.example.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
