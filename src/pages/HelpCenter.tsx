
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Help Center - PDFixit</title>
        <meta name="description" content="Get help with using PDFixit tools and services." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Help Center</h1>
        
        <div className="space-y-8 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
                <h3 className="font-medium mb-2">How do I use PDFixit tools?</h3>
                <p className="text-muted-foreground">Our tools are designed to be simple and intuitive. Just upload your file, select your desired options, and download the processed result.</p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
                <h3 className="font-medium mb-2">Is there a file size limit?</h3>
                <p className="text-muted-foreground">Yes, the maximum file size for free users is 100MB. For larger files, please contact our support team.</p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
                <h3 className="font-medium mb-2">Are my files secure?</h3>
                <p className="text-muted-foreground">Yes, your files are processed securely and deleted automatically after 24 hours. We do not store any of your files permanently.</p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
                <h3 className="font-medium mb-2">How can I contact support?</h3>
                <p className="text-muted-foreground">You can contact our support team via the <a href="/contact" className="text-primary hover:underline">Contact page</a> or by emailing support@pdfixit.example.com.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
              <p className="mb-4">Using PDFixit is easy and straightforward:</p>
              
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Choose the tool you need from our homepage or navigation menu</li>
                <li>Upload your file using the upload button or drag-and-drop area</li>
                <li>Adjust any settings if needed (compression level, format options, etc.)</li>
                <li>Click the process button and wait for the tool to finish</li>
                <li>Download your processed file</li>
              </ol>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;
