
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApiKeySetup from "@/components/ApiKeySetup";
import ApiTest from "@/components/ApiTest";

const ApiSettings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>API Settings - PDFixit</title>
        <meta name="description" content="Configure API settings for PDFixit tools." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">API Settings</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">API Key Configuration</h2>
              <ApiKeySetup />
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Test API Connection</h2>
              <div className="bg-background/80 backdrop-blur-sm border rounded-xl shadow-sm p-6">
                <ApiTest />
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">API Documentation</h2>
              <div className="bg-background/80 backdrop-blur-sm border rounded-xl shadow-sm p-6">
                <p className="text-muted-foreground mb-4">
                  The PDFixit API allows you to programmatically access our file conversion and processing tools.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Process files through our API endpoints</li>
                  <li>Convert files between different formats</li>
                  <li>Compress images and PDFs programmatically</li>
                  <li>Access batch processing capabilities</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiSettings;
