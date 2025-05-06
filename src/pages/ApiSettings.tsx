
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
              <div className="bg-background/80 backdrop-blur-sm border rounded-xl shadow-sm p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Your API key is now stored securely in the database instead of your browser's local storage. 
                  You must be logged in to save and use your API key.
                </p>
                <ApiKeySetup />
              </div>
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
                <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                  <h3 className="text-sm font-medium mb-1">Security Improvements</h3>
                  <p className="text-xs text-muted-foreground">
                    Your API key is now stored securely in our database and is never exposed client-side. 
                    All API requests are now routed through a secure Supabase Edge Function.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">API Usage Logs</h2>
              <div className="bg-background/80 backdrop-blur-sm border rounded-xl shadow-sm p-6">
                <p className="text-muted-foreground mb-4">
                  We now track your API usage to help you monitor your consumption. 
                  Coming soon: view detailed logs of your API requests.
                </p>
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
