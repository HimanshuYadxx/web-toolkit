
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { toolsData } from "@/data/toolsData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, File, FileText, Film, Image, Images, Maximize, Scissors, Video, Shield, Unlock, Layers, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { toast } from "@/hooks/use-toast";
import { hasApiKey } from "@/utils/apiService";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ToolPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tool, setTool] = useState(toolsData.find(t => t.id === id));
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [processedFile, setProcessedFile] = useState<string | null>(null);
  const [recentTools, setRecentTools] = useState<any[]>([]);
  const [apiEnabled, setApiEnabled] = useState(false);
  
  // Check if API key is available
  useEffect(() => {
    setApiEnabled(hasApiKey());
  }, []);
  
  // For recent activity tracking
  useEffect(() => {
    if (tool) {
      // Store recent activity in local storage
      const storedRecentTools = JSON.parse(localStorage.getItem("recentTools") || "[]");
      const toolExists = storedRecentTools.some((t: any) => t.id === tool.id);
      
      if (!toolExists) {
        const updatedRecentTools = [
          { id: tool.id, name: tool.name, timestamp: new Date().toISOString() },
          ...storedRecentTools
        ].slice(0, 5); // Keep only the 5 most recent
        localStorage.setItem("recentTools", JSON.stringify(updatedRecentTools));
        setRecentTools(updatedRecentTools);
      } else {
        setRecentTools(storedRecentTools);
      }
    }
  }, [tool]);

  // Map icon string to actual Lucide icon component
  const IconComponent = () => {
    if (!tool) return <File className="h-12 w-12 text-primary" />;
    
    switch (tool.icon) {
      case "file":
        return <File className="h-12 w-12 text-primary" />;
      case "files":
        return <FileText className="h-12 w-12 text-primary" />;
      case "scissors":
        return <Scissors className="h-12 w-12 text-primary" />;
      case "image":
        return <Image className="h-12 w-12 text-primary" />;
      case "images":
        return <Images className="h-12 w-12 text-primary" />;
      case "maximize":
        return <Maximize className="h-12 w-12 text-primary" />;
      case "video":
        return <Video className="h-12 w-12 text-primary" />;
      case "film":
        return <Film className="h-12 w-12 text-primary" />;
      case "file-text":
        return <FileText className="h-12 w-12 text-primary" />;
      case "shield":
        return <Shield className="h-12 w-12 text-primary" />;
      case "unlock":
        return <Unlock className="h-12 w-12 text-primary" />;
      case "layers":
        return <Layers className="h-12 w-12 text-primary" />;
      case "compass":
        return <Compass className="h-12 w-12 text-primary" />;
      default:
        return <File className="h-12 w-12 text-primary" />;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setProcessedFile(null); // Reset processed file when new file selected
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to process",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // If API is enabled, use it for processing, otherwise use local processing
    if (apiEnabled) {
      // Simulate API processing
      setTimeout(() => {
        // Create a dummy result URL
        const fakeProcessedUrl = URL.createObjectURL(new Blob([file], { type: file.type }));
        
        setProcessedFile(fakeProcessedUrl);
        setLoading(false);
        
        toast({
          title: "Success!",
          description: `File processed via API: ${tool?.name || 'Tool'}`,
        });
      }, 2000);
    } else {
      // Process file based on tool type (local fallback)
      setTimeout(() => {
        // Create a dummy result URL
        const fakeProcessedUrl = URL.createObjectURL(new Blob([file], { type: file.type }));
        
        // Success message based on tool type
        let successMessage = "";
        
        if (tool) {
          if (tool.category === "PDF") {
            successMessage = `PDF successfully ${tool.id.includes("compress") ? "compressed" : tool.id.includes("merge") ? "merged" : tool.id.includes("split") ? "split" : tool.id.includes("protect") ? "protected" : tool.id.includes("unlock") ? "unlocked" : tool.id.includes("organize") ? "organized" : "processed"}!`;
          } else if (tool.category === "Image") {
            successMessage = `Image successfully ${tool.id.includes("compress") ? "compressed" : tool.id.includes("convert") ? "converted" : tool.id.includes("resize") ? "resized" : tool.id.includes("crop") ? "cropped" : tool.id.includes("rotate") ? "rotated" : tool.id.includes("watermark") ? "watermarked" : "processed"}!`;
          } else if (tool.category === "Video") {
            successMessage = `Video successfully ${tool.id.includes("compress") ? "compressed" : tool.id.includes("convert") ? "converted" : tool.id.includes("trim") ? "trimmed" : tool.id.includes("merge") ? "merged" : tool.id.includes("rotate") ? "rotated" : "processed"}!`;
          } else if (tool.category === "Convert") {
            successMessage = `File successfully converted!`;
          }
        }
        
        toast({
          title: "Success!",
          description: successMessage || "File successfully processed!",
        });
        
        setProcessedFile(fakeProcessedUrl);
        setLoading(false);
      }, 2000);
    }
  };

  const handleDownload = () => {
    if (processedFile) {
      const link = document.createElement('a');
      link.href = processedFile;
      link.download = `processed-${file?.name || 'file'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download started",
        description: "Your processed file is being downloaded",
      });
    }
  };

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
          <p className="mb-6">The tool you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{`${tool.name} - Free Online Tool | PDFixit`}</title>
        <meta name="description" content={`${tool.description}. Free online tool, no registration required.`} />
        <meta name="keywords" content={`${tool.name.toLowerCase()}, ${tool.category.toLowerCase()}, online tool, free tool, pdf tool`} />
        <meta property="og:title" content={`${tool.name} - Free Online Tool | PDFixit`} />
        <meta property="og:description" content={`${tool.description}. Free online tool, no registration required.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pdfixit.example.com/tool/${tool.id}`} />
        <link rel="canonical" href={`https://pdfixit.example.com/tool/${tool.id}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container py-12">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground mb-6 hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all tools
            </Link>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-primary/10 backdrop-blur-sm p-6 rounded-xl">
                <IconComponent />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{tool.name}</h1>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                  {tool.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top ad placement */}
        <AdBanner slot="1234567890" format="horizontal" className="container my-6" />
        
        {/* API Status Alert */}
        <div className="container max-w-3xl mx-auto mb-6">
          {apiEnabled ? (
            <Alert className="bg-green-50 border-green-200">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">API Mode Enabled</AlertTitle>
              <AlertDescription className="text-green-700">
                Processing will use the iLoveAPI service for advanced capabilities.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="bg-blue-50 border-blue-200">
              <Shield className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Local Processing Mode</AlertTitle>
              <AlertDescription className="text-blue-700">
                Processing will use local capabilities. 
                <Link to="/api-settings" className="text-blue-800 underline ml-1">
                  Set up API access
                </Link> for advanced features.
              </AlertDescription>
            </Alert>
          )}
        </div>
        
        {/* Tool content */}
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm border rounded-xl shadow-sm p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Upload your file</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-6">
                  <input 
                    type="file" 
                    id="file-upload" 
                    className="hidden" 
                    onChange={handleFileChange}
                  />
                  <label 
                    htmlFor="file-upload" 
                    className="cursor-pointer flex flex-col items-center justify-center"
                  >
                    <File className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-lg font-medium mb-1">Drop your file here or click to browse</p>
                    <p className="text-sm text-muted-foreground">Upload any file size</p>
                  </label>
                </div>
                
                {file && (
                  <div className="bg-primary/5 rounded-lg p-4 mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <File className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">{file.name}</span>
                    </div>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setFile(null)}
                    >
                      Remove
                    </Button>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  disabled={!file || loading} 
                  className="w-full"
                >
                  {loading ? "Processing..." : `Process with ${tool.name}`}
                </Button>
                
                {processedFile && (
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-medium text-green-800 mb-2">Processing Complete!</h3>
                    <p className="text-green-700 text-sm mb-4">Your file has been successfully processed.</p>
                    <Button 
                      onClick={handleDownload} 
                      className="w-full" 
                      variant="outline"
                    >
                      Download Result
                    </Button>
                  </div>
                )}
              </form>
            </div>
            
            {/* Middle ad placement */}
            <AdBanner slot="7890123456" format="rectangle" className="my-8" />
            
            {/* Recent tools used section */}
            {recentTools.length > 1 && (
              <div className="mt-8 mb-8">
                <h3 className="text-lg font-medium mb-4">Recently Used Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {recentTools
                    .filter(t => t.id !== tool.id)
                    .slice(0, 3)
                    .map(t => (
                      <Link
                        key={t.id}
                        to={`/tool/${t.id}`}
                        className="p-4 bg-secondary/50 hover:bg-secondary/80 rounded-lg text-center transition-colors"
                      >
                        <p className="font-medium">{t.name}</p>
                      </Link>
                    ))}
                </div>
              </div>
            )}
            
            {/* How to use section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">How to use {tool.name}</h2>
              
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h3 className="font-medium mb-1">Upload your file</h3>
                    <p className="text-muted-foreground">Drop your file in the upload area or click to browse your files.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h3 className="font-medium mb-1">Process your file</h3>
                    <p className="text-muted-foreground">Click the process button and wait for the tool to finish.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h3 className="font-medium mb-1">Download results</h3>
                    <p className="text-muted-foreground">Once processing is complete, download your processed file.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom ad placement */}
        <AdBanner slot="5678901234" format="horizontal" className="container my-8" />
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolPage;
