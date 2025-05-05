
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "How to Compress PDF Files Without Losing Quality",
    excerpt: "Learn the best techniques for reducing PDF file size while maintaining document quality and readability.",
    category: "PDF",
    date: "May 2, 2025",
    author: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1586772002345-339f8042a777?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Converting Word Documents to PDF: Best Practices",
    excerpt: "Discover the most efficient ways to convert your Word documents to PDF format while preserving formatting.",
    category: "Conversion",
    date: "April 28, 2025",
    author: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Image Optimization Techniques for Better Website Performance",
    excerpt: "Improve your website's loading speed by implementing these image optimization techniques.",
    category: "Image",
    date: "April 22, 2025",
    author: "David Kim",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Securing Your PDF Files: A Complete Guide",
    excerpt: "Learn how to protect your PDF documents with passwords, encryption, and other security features.",
    category: "Security",
    date: "April 15, 2025",
    author: "Emily Thompson",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Tips for Creating Accessible PDF Documents",
    excerpt: "Make your PDFs accessible to all users, including those with disabilities, with these essential tips.",
    category: "Accessibility",
    date: "April 8, 2025",
    author: "Michael Brown",
    image: "https://images.unsplash.com/photo-1568566636506-5e7da927fdaa?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Video Compression: Balancing Quality and File Size",
    excerpt: "Find the perfect balance between video quality and file size with these compression techniques.",
    category: "Video",
    date: "April 1, 2025",
    author: "Sarah Davis",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=500&auto=format&fit=crop"
  }
];

// Blog categories
const categories = ["All", "PDF", "Image", "Video", "Conversion", "Security", "Accessibility"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog - PDFixit</title>
        <meta name="description" content="Read the latest articles, tutorials, and guides about PDF tools and document management." />
        <meta name="keywords" content="PDF tools, document management, blog, tutorials, guides" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">PDFixit Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tutorials, guides, and tips to help you get the most out of our tools and manage your documents effectively.
            </p>
          </div>
        </section>
        
        {/* Search and filter */}
        <section className="container py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="pl-10 pr-4 py-2 rounded-full text-sm bg-secondary focus:outline-none focus:ring-1 focus:ring-primary w-full md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Top ad */}
          <AdBanner slot="1234567890" format="horizontal" className="mb-8" />
          
          {/* Blog posts grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <article 
                  key={post.id} 
                  className="bg-background/80 backdrop-blur-sm border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary mb-2">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-semibold mb-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">No articles found</h2>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
          
          {/* Bottom ad */}
          <AdBanner slot="9876543210" format="horizontal" className="mt-8" />
        </section>
        
        {/* Newsletter section */}
        <section className="bg-secondary/30 py-12 mt-8">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest tips, tutorials, and updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
