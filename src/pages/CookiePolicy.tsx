
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Cookie Policy - PDFixit</title>
        <meta name="description" content="Learn about how PDFixit uses cookies on our website." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-3xl">
          <p className="text-lg text-muted-foreground mb-8">
            This Cookie Policy explains how PDFixit uses cookies and similar technologies to recognize you when
            you visit our website. It explains what these technologies are and why we use them, as well as your rights
            to control our use of them.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
          <p className="text-muted-foreground mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
            as well as to provide reporting information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why do we use cookies?</h2>
          <p className="text-muted-foreground mb-4">
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons
            for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies
            enable us to track and target the interests of our users to enhance the experience on our website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">The specific types of cookies we use</h2>
          <ul className="space-y-4 mb-6">
            <li className="text-muted-foreground">
              <strong className="text-foreground">Essential cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
            </li>
            <li className="text-muted-foreground">
              <strong className="text-foreground">Analytics cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
            </li>
            <li className="text-muted-foreground">
              <strong className="text-foreground">Functionality cookies:</strong> These cookies allow our website to remember choices you make when you use our website, such as remembering your language preferences or your login details.
            </li>
            <li className="text-muted-foreground">
              <strong className="text-foreground">Advertising cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How can you control cookies?</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
          </p>
          
          <p className="text-muted-foreground mb-4">
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to this Cookie Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised Cookie Policy on our website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about our use of cookies, please contact us at <a href="mailto:privacy@pdfixit.example.com" className="text-primary hover:underline">privacy@pdfixit.example.com</a>.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
