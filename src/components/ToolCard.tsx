
import React from "react";
import { Link } from "react-router-dom";
import { File, FileText, Film, Image, Images, Maximize, Scissors, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  onQuickUse?: () => void;
}

const ToolCard = ({ id, name, description, icon, onQuickUse }: ToolCardProps) => {
  // Map icon string to actual Lucide icon component
  const IconComponent = () => {
    switch (icon) {
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

  return (
    <div className="tool-card border border-border/60 rounded-lg overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
      <div className="p-6">
        <div className="mb-4">
          <IconComponent />
        </div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="bg-secondary/50 px-6 py-4 flex justify-between">
        <Button asChild variant="outline" className="w-3/5">
          <Link to={`/tool/${id}`}>Use Tool</Link>
        </Button>
        <Button variant="ghost" className="w-1/3" onClick={onQuickUse}>
          Quick Use
        </Button>
      </div>
    </div>
  );
};

export default ToolCard;
