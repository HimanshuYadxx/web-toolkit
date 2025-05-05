
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Dummy blog post data
const blogPosts = [
  {
    id: 'pdf-tips-tricks',
    title: 'Top 10 PDF Tips and Tricks',
    excerpt: 'Learn the most useful PDF hacks to boost your productivity and streamline your workflow.',
    date: '2024-05-01',
    category: 'PDF',
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000'
  },
  {
    id: 'image-optimization',
    title: 'Image Optimization: The Complete Guide',
    excerpt: 'Everything you need to know about optimizing your images for web and print without losing quality.',
    date: '2024-04-25',
    category: 'Image',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1000'
  },
  {
    id: 'video-compression',
    title: 'Video Compression Techniques',
    excerpt: 'Learn how to compress your videos while maintaining good quality for different platforms.',
    date: '2024-04-18',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1000'
  },
  {
    id: 'file-conversions',
    title: 'When to Convert: File Format Guide',
    excerpt: 'A comprehensive guide to choosing the right file format for your specific needs.',
    date: '2024-04-10',
    category: 'Convert',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000'
  },
  {
    id: 'pdf-security',
    title: 'PDF Security Best Practices',
    excerpt: 'How to secure your PDF files and protect sensitive information from unauthorized access.',
    date: '2024-04-02',
    category: 'PDF',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000'
  },
  {
    id: 'image-formats',
    title: 'Understanding Image Formats',
    excerpt: 'JPG, PNG, WebP, SVG - When to use each image format for optimal results.',
    date: '2024-03-28',
    category: 'Image',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000'
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog - PDFixit: Tips, Guides & Tutorials</title>
        <meta name="description" content="Read our latest articles about file editing, conversions, and digital document management." />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-b from-primary/10 to-transparent py-12 md:py-20">
          <div className="container text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">PDFixit Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, guides and tutorials to help you get the most out of digital files
            </p>
          </div>
        </div>
        
        {/* Search and category filters */}
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-border/60 hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="text-primary hover:text-primary/90 p-0">
                      Read more
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
          
          {/* Newsletter signup */}
          <div className="bg-secondary/50 rounded-xl p-8 md:p-12 text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Get the latest PDFixit tips, tutorials and updates delivered directly to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
