
import { useState } from "react";
import { categories, toolsData } from "@/data/toolsData";
import ToolCard from "./ToolCard";
import { Button } from "@/components/ui/button";

const ToolGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Filter tools based on active category
  const filteredTools = activeCategory === "all" 
    ? toolsData 
    : toolsData.filter(tool => tool.category === activeCategory);

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
        {filteredTools.map(tool => (
          <ToolCard 
            key={tool.id}
            id={tool.id}
            name={tool.name}
            description={tool.description}
            icon={tool.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolGrid;
