
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Security - PDFixit</title>
        <meta name="description" content="Learn about how PDFixit keeps your files and data secure." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Security</h1>
        
        <div className="prose prose-slate max-w-3xl">
          <p className="text-lg text-muted-foreground mb-8">
            At PDFixit, we take the security of your files and personal information very seriously. 
            This page outlines the measures we take to ensure your data remains secure while using our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">File Security</h2>
          <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6 mb-6">
            <h3 className="font-medium mb-2">Secure File Processing</h3>
            <p className="text-muted-foreground">
              All files uploaded to our platform are processed securely on our servers. We use state-of-the-art 
              encryption to ensure that your files cannot be accessed by unauthorized parties during transfer and processing.
            </p>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6 mb-6">
            <h3 className="font-medium mb-2">Automatic File Deletion</h3>
            <p className="text-muted-foreground">
              We do not store your files permanently. All uploaded files are automatically deleted from our servers 
              after 24 hours. This ensures that your files do not remain on our systems longer than necessary.
            </p>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6 mb-6">
            <h3 className="font-medium mb-2">No Third-Party Access</h3>
            <p className="text-muted-foreground">
              We do not share your files with any third parties. Your files are only processed on our secure servers 
              and are not accessible to anyone other than you.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Protection</h2>
          <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6 mb-6">
            <h3 className="font-medium mb-2">HTTPS Encryption</h3>
            <p className="text-muted-foreground">
              Our website uses HTTPS encryption to ensure that all data transmitted between your browser and our servers 
              is encrypted and secure. This protects your information from being intercepted during transmission.
            </p>
          </div>
          
          <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6 mb-6">
            <h3 className="font-medium mb-2">Minimal Data Collection</h3>
            <p className="text-muted-foreground">
              We collect only the minimum amount of data necessary to provide our services. We do not require personal 
              information to use our tools, and we do not track your activity across other websites.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitments</h2>
          <ul className="space-y-4 mb-6">
            <li className="text-muted-foreground">
              <strong className="text-foreground">Regular Security Audits:</strong> We conduct regular security audits of our systems to identify and address potential vulnerabilities.
            </li>
            <li className="text-muted-foreground">
              <strong className="text-foreground">Continuous Monitoring:</strong> Our systems are continuously monitored for unusual activity that could indicate a security breach.
            </li>
            <li className="text-muted-foreground">
              <strong className="text-foreground">Transparency:</strong> We are committed to being transparent about our security practices and will promptly notify users in the unlikely event of a security breach.
            </li>
            <li className="text-muted-foreground">
              <strong className="text-foreground">Compliance:</strong> We comply with relevant data protection regulations to ensure that your data is handled responsibly.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Report Security Issues</h2>
          <p className="text-muted-foreground mb-4">
            If you believe you've found a security vulnerability on our website, please let us know immediately. 
            We take all security concerns seriously and will investigate promptly.
          </p>
          
          <p className="text-muted-foreground">
            Contact our security team at <a href="mailto:security@pdfixit.example.com" className="text-primary hover:underline">security@pdfixit.example.com</a>.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
