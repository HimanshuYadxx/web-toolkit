
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { File, FileText, Film, Image, Images, Maximize, Scissors, Video } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  name: string;
  description: string;
  icon: string;
  id: string;
}

const ToolCard = ({ name, description, icon, id }: ToolCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Stagger the animation of cards
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, Math.random() * 400);
    
    return () => clearTimeout(timer);
  }, []);

  // Map icon string to actual Lucide icon component
  const IconComponent = () => {
    switch (icon) {
      case "file":
        return <File className="h-8 w-8 text-primary" />;
      case "files":
        return <FileText className="h-8 w-8 text-primary" />;
      case "scissors":
        return <Scissors className="h-8 w-8 text-primary" />;
      case "image":
        return <Image className="h-8 w-8 text-primary" />;
      case "images":
        return <Images className="h-8 w-8 text-primary" />;
      case "maximize":
        return <Maximize className="h-8 w-8 text-primary" />;
      case "video":
        return <Video className="h-8 w-8 text-primary" />;
      case "film":
        return <Film className="h-8 w-8 text-primary" />;
      case "file-text":
        return <FileText className="h-8 w-8 text-primary" />;
      default:
        return <File className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <Card 
      className={`tool-card overflow-hidden border border-border/60 bg-background/80 backdrop-blur-sm transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <CardContent className="p-6">
        <div className="bg-accent/50 w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
          <IconComponent />
        </div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="bg-secondary/50 px-6 py-4">
        <Button 
          variant="secondary" 
          size="sm" 
          className="w-full font-medium transition-all duration-200 hover:bg-primary hover:text-white"
          asChild
        >
          <Link to={`/tool/${id}`}>
            Use Tool
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
