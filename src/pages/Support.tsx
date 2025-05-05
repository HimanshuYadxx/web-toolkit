
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Customer Support - PDFixit</title>
        <meta name="description" content="Get support for PDFixit tools and services." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Customer Support</h1>
        
        <div className="max-w-3xl space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How Can We Help You?</h2>
            <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
              <p className="mb-4">Our support team is ready to assist you with any questions or issues you may have with our tools.</p>
              
              <p className="text-muted-foreground">For fastest response, please include:</p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 ml-2">
                <li>The name of the tool you're using</li>
                <li>A detailed description of the issue</li>
                <li>Any error messages you received</li>
                <li>Steps you've already taken to resolve the issue</li>
              </ul>
              
              <p className="font-medium">Email us at: <a href="mailto:support@pdfixit.example.com" className="text-primary hover:underline">support@pdfixit.example.com</a></p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Response Time</h2>
            <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
              <p className="text-muted-foreground">We aim to respond to all support inquiries within 24 hours. For urgent matters, please indicate "URGENT" in your subject line.</p>
            </div>
          </section>
          
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Common Issues</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/help#file-size" className="text-primary hover:underline">File size limitations</a></li>
                <li><a href="/help#formats" className="text-primary hover:underline">Supported file formats</a></li>
                <li><a href="/help#processing" className="text-primary hover:underline">Processing errors</a></li>
                <li><a href="/help#download" className="text-primary hover:underline">Download issues</a></li>
              </ul>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Resources</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
                <li><a href="/help" className="text-primary hover:underline">Help Center</a></li>
                <li><a href="/blog" className="text-primary hover:underline">Blog Tutorials</a></li>
                <li><a href="/contact" className="text-primary hover:underline">Contact Form</a></li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
