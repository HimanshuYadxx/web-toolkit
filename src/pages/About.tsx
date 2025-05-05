
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container py-12">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground mb-6 hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold">About PDFixit</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
              Simple, free online tools to help with all your PDF and file conversion needs.
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="prose prose-lg max-w-3xl">
            <h2>Our Mission</h2>
            <p>
              At PDFixit, our mission is to provide simple, accessible tools that solve everyday file management problems. 
              We believe that powerful document manipulation should be available to everyone, regardless of technical expertise or budget.
            </p>
            
            <h2>What We Offer</h2>
            <p>
              We've built a collection of free online tools that help users work with PDFs, images, videos, and other file types.
              Our tools are designed to be intuitive, fast, and reliable - all without requiring downloads, installations, or registrations.
            </p>
            
            <h2>Our Team</h2>
            <p>
              PDFixit was founded by a group of developers who were frustrated with the complexity and cost of existing file conversion tools.
              We're a small team passionate about creating technologies that simplify digital workflows.
            </p>
            
            <h2>Privacy & Security</h2>
            <p>
              We take your privacy seriously. Files uploaded to our platform are processed securely and automatically deleted after processing.
              We don't store your files permanently, and we don't collect unnecessary personal information.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
