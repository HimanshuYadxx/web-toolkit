
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { callApiViaSupabase, hasApiKey } from "@/utils/supabaseApiService";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const ApiTest = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const navigate = useNavigate();
  
  const testApiConnection = async () => {
    const { data } = await supabase.auth.getSession();
    const loggedIn = !!data.session;
    
    if (!loggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please log in to test the API connection.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    const hasKey = await hasApiKey();
    if (!hasKey) {
      toast({
        title: "API Key Required",
        description: "Please set your API key first.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    setResult(null);
    
    try {
      // This is a placeholder endpoint - replace with an actual endpoint from your API
      const data = await callApiViaSupabase<any>({ 
        endpoint: '/test',
        method: 'GET'
      });
      
      setResult(data);
      toast({
        title: "Success",
        description: "API connection successful!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to connect to API",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="space-y-4">
      <Button 
        onClick={testApiConnection}
        disabled={loading}
        className="w-full"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Testing Connection...
          </>
        ) : (
          "Test API Connection"
        )}
      </Button>
      
      {result && (
        <div className="bg-secondary/20 rounded-md p-4 mt-4">
          <h3 className="text-sm font-medium mb-2">API Response:</h3>
          <pre className="text-xs overflow-auto max-h-40 p-2 bg-background/80 rounded border">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiTest;
