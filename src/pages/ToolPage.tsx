
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toolsData } from "@/data/toolsData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, File, FileText, Film, Image, Images, Maximize, Scissors, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ToolPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tool, setTool] = useState(toolsData.find(t => t.id === id));
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  
  // For recent activity tracking
  useEffect(() => {
    if (tool) {
      // Store recent activity in local storage
      const recentTools = JSON.parse(localStorage.getItem("recentTools") || "[]");
      const toolExists = recentTools.some((t: any) => t.id === tool.id);
      
      if (!toolExists) {
        const updatedRecentTools = [
          { id: tool.id, name: tool.name, timestamp: new Date().toISOString() },
          ...recentTools
        ].slice(0, 5); // Keep only the 5 most recent
        localStorage.setItem("recentTools", JSON.stringify(updatedRecentTools));
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
      default:
        return <File className="h-12 w-12 text-primary" />;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    setLoading(true);
    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      // Here you would actually process the file
      console.log(`Processing file ${file.name} with tool ${id}`);
    }, 2000);
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
        
        {/* Tool content */}
        <div className="container py-12">
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
                    <p className="text-sm text-muted-foreground">Maximum file size: 100MB</p>
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
              </form>
            </div>
            
            {/* How to use section */}
            <div className="mt-12">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolPage;
