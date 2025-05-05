
import { useState, useEffect } from "react";
import { categories, toolsData } from "@/data/toolsData";
import ToolCard from "./ToolCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const ToolGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredTools, setFilteredTools] = useState(toolsData);

  useEffect(() => {
    // Simulate loading delay
    setIsLoading(true);
    const timer = setTimeout(() => {
      setFilteredTools(
        activeCategory === "all" 
          ? toolsData 
          : toolsData.filter(tool => tool.category === activeCategory)
      );
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Explore Our <span className="text-primary">Free</span> Tools
      </h2>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
        <Button 
          variant={activeCategory === "all" ? "default" : "outline"}
          className="rounded-full"
          onClick={() => setActiveCategory("all")}
        >
          All Tools
        </Button>

        {categories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          // Skeleton loading cards
          Array(8).fill(0).map((_, index) => (
            <div key={`skeleton-${index}`} className="tool-card border border-border/60 rounded-lg overflow-hidden">
              <div className="p-6">
                <Skeleton className="w-16 h-16 rounded-lg mb-4" />
                <Skeleton className="w-3/4 h-6 mb-2" />
                <Skeleton className="w-full h-4 mb-1" />
                <Skeleton className="w-2/3 h-4" />
              </div>
              <div className="bg-secondary/50 px-6 py-4">
                <Skeleton className="w-full h-9" />
              </div>
            </div>
          ))
        ) : (
          filteredTools.map(tool => (
            <ToolCard 
              key={tool.id}
              id={tool.id}
              name={tool.name}
              description={tool.description}
              icon={tool.icon}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ToolGrid;
