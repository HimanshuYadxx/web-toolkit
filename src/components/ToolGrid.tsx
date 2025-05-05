
import { useState, useEffect } from "react";
import { categories, toolsData } from "@/data/toolsData";
import ToolCard from "./ToolCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown } from "lucide-react";

interface ToolGridProps {
  searchQuery?: string;
  initialCategory?: string;
}

const ToolGrid = ({ searchQuery = "", initialCategory = "all" }: ToolGridProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredTools, setFilteredTools] = useState(toolsData);
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    // Set active category from props
    if (initialCategory !== "all" && categories.includes(initialCategory)) {
      setActiveCategory(initialCategory);
    } else {
      setActiveCategory("all");
    }
  }, [initialCategory]);

  useEffect(() => {
    // Simulate loading delay
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = toolsData;
      
      // Apply category filter
      if (activeCategory !== "all") {
        filtered = filtered.filter(tool => tool.category === activeCategory);
      }
      
      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(tool => 
          tool.name.toLowerCase().includes(query) || 
          tool.description.toLowerCase().includes(query) || 
          tool.category.toLowerCase().includes(query)
        );
      }
      
      setFilteredTools(filtered);
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);

  // Show the first 4 categories on mobile, all on desktop
  const visibleCategories = showAllCategories ? categories : categories.slice(0, 4);

  return (
    <div className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        {searchQuery ? `Search results for "${searchQuery}"` : 
          activeCategory !== "all" ? `${activeCategory} Tools` :
          'Explore Our Free Tools'}
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

        {visibleCategories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
        
        {/* Toggle button for categories on mobile */}
        {categories.length > 4 && (
          <Button
            variant="outline"
            className="md:hidden rounded-full flex items-center"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? "Less" : "More"}
            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showAllCategories ? 'rotate-180' : ''}`} />
          </Button>
        )}
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
        ) : filteredTools.length > 0 ? (
          filteredTools.map(tool => (
            <ToolCard 
              key={tool.id}
              id={tool.id}
              name={tool.name}
              description={tool.description}
              icon={tool.icon}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium mb-2">No tools found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolGrid;
