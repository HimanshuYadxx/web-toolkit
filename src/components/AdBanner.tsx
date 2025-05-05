
import { useEffect } from "react";

interface AdBannerProps {
  slot: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
}

const AdBanner = ({ slot, format = "auto", className = "" }: AdBannerProps) => {
  useEffect(() => {
    // Load AdSense script if it hasn't been loaded already
    const hasScript = document.querySelector('script[src*="adsbygoogle.js"]');
    if (!hasScript && process.env.NODE_ENV === "production") {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      // Replace with your AdSense publisher ID when available
      // script.setAttribute("data-ad-client", "ca-pub-YOUR_PUBLISHER_ID");
      document.head.appendChild(script);
    }
  }, []);

  // Only render in production
  if (process.env.NODE_ENV !== "production") {
    return (
      <div 
        className={`flex items-center justify-center bg-secondary/50 border border-dashed border-border text-muted-foreground text-sm p-4 ${className}`}
        style={{ minHeight: format === "horizontal" ? "90px" : format === "vertical" ? "600px" : format === "rectangle" ? "250px" : "100px" }}
      >
        Ad Placement ({slot})
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID" // Replace with your AdSense publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      {process.env.NODE_ENV === "production" && (
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </script>
      )}
    </div>
  );
};

export default AdBanner;
