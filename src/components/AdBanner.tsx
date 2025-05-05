
import { useEffect } from "react";

interface AdBannerProps {
  slot: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
  publisherId?: string;
}

const AdBanner = ({ 
  slot, 
  format = "auto", 
  className = "", 
  publisherId = "ca-pub-YOUR_PUBLISHER_ID" // Replace with actual publisher ID when available
}: AdBannerProps) => {
  useEffect(() => {
    // Load AdSense script if it hasn't been loaded already
    const hasScript = document.querySelector('script[src*="adsbygoogle.js"]');
    if (!hasScript && process.env.NODE_ENV === "production") {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("data-ad-client", publisherId);
      document.head.appendChild(script);
    }
    
    // Initialize ads
    try {
      if (process.env.NODE_ENV === "production" && (window as any).adsbygoogle) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [publisherId]);

  // Only render in production
  if (process.env.NODE_ENV !== "production") {
    return (
      <div 
        className={`flex items-center justify-center bg-secondary/50 border border-dashed border-border text-muted-foreground text-sm p-4 ${className}`}
        style={{ 
          minHeight: format === "horizontal" ? "90px" : format === "vertical" ? "600px" : format === "rectangle" ? "250px" : "100px",
          minWidth: format === "vertical" ? "160px" : "auto" 
        }}
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
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
