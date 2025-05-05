
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");

  const categories = [
    { id: "general", name: "General" },
    { id: "tools", name: "Tools" },
    { id: "security", name: "Security" },
    { id: "technical", name: "Technical" }
  ];

  const faqItems = {
    general: [
      {
        question: "Is PDFixit completely free to use?",
        answer: "Yes, all our basic tools are completely free to use. We may offer premium features in the future, but our core tools will always remain free."
      },
      {
        question: "Do I need to create an account?",
        answer: "No, you don't need to create an account to use our tools. Simply visit our website and start using the tools right away."
      },
      {
        question: "How do I contact customer support?",
        answer: "You can contact our support team via the Contact page or by sending an email to support@pdfixit.example.com."
      },
      {
        question: "Is there a mobile app for PDFixit?",
        answer: "Currently, we don't have a mobile app. However, our website is fully responsive and works well on mobile browsers."
      }
    ],
    tools: [
      {
        question: "How do I use the PDF compression tool?",
        answer: "Simply upload your PDF file, select your desired compression level, and click 'Compress'. After processing, you can download your compressed file."
      },
      {
        question: "What's the maximum file size I can upload?",
        answer: "The maximum file size for uploads is 100MB. For larger files, please contact our support team."
      },
      {
        question: "Can I convert multiple files at once?",
        answer: "Yes, many of our tools support batch processing. Look for the 'Add more files' option when using these tools."
      },
      {
        question: "What file formats do you support?",
        answer: "We support a wide range of formats including PDF, DOCX, XLSX, PPTX, JPG, PNG, and many more. Check the specific tool page for supported formats."
      }
    ],
    security: [
      {
        question: "Are my files secure when I upload them?",
        answer: "Yes, all files are encrypted during transfer and processing. We use HTTPS to ensure secure transmission of your data."
      },
      {
        question: "How long do you keep my files?",
        answer: "All uploaded files are automatically deleted after 24 hours. We don't permanently store any user files."
      },
      {
        question: "Do you share my files or data with third parties?",
        answer: "No, we don't share your files or personal data with any third parties. Your privacy is important to us."
      },
      {
        question: "What data do you collect about users?",
        answer: "We collect minimal data required for the service to function, such as IP addresses and browser information. See our Privacy Policy for more details."
      }
    ],
    technical: [
      {
        question: "Why is my file not uploading?",
        answer: "This could be due to a poor internet connection, file size exceeding our limits, or an unsupported file format. Try compressing the file first or using a different browser."
      },
      {
        question: "The website is not working properly, what should I do?",
        answer: "Try clearing your browser cache, using a different browser, or disabling browser extensions that might interfere with the website."
      },
      {
        question: "Why is the quality of my processed file lower than the original?",
        answer: "Some of our tools involve compression or format conversion which might affect quality. You can adjust the quality settings in most tools to balance size and quality."
      },
      {
        question: "Can I use PDFixit tools offline?",
        answer: "No, our tools require an internet connection as all processing is done on our servers."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Frequently Asked Questions - PDFixit</title>
        <meta name="description" content="Find answers to frequently asked questions about PDFixit tools and services." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="space-y-4">
            {faqItems[activeCategory as keyof typeof faqItems].map((item, index) => (
              <div key={index} className="bg-background/80 backdrop-blur-sm border rounded-lg p-6">
                <h3 className="font-medium mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            If you couldn't find the answer to your question, please don't hesitate to contact our support team.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="text-primary hover:underline font-medium">
              Contact Support
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="/help" className="text-primary hover:underline font-medium">
              Visit Help Center
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
