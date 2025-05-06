
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { saveApiKey, removeApiKey, hasApiKey } from "@/utils/supabaseApiService";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const ApiKeySetup = () => {
  const [apiKey, setApiKeyState] = useState<string>("secret_key_d40508673e64934cbbe4cfa984d156e4_fwAVDc6bb36a5117bd1e2b75b7c30fbfbbeed");
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      const loggedIn = !!data.session;
      setIsLoggedIn(loggedIn);
      
      if (loggedIn) {
        // Check if API key exists
        const keyExists = await hasApiKey();
        setIsSaved(keyExists);
        if (keyExists) {
          setApiKeyState("●".repeat(20));
        }
      }
      
      setIsLoading(false);
    };
    
    checkSession();
  }, []);
  
  const handleLoginRedirect = () => {
    navigate("/login");
  };
  
  const handleSaveKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await saveApiKey(apiKey);
      setIsSaved(true);
      toast({
        title: "Success",
        description: "API key saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save API key: " + (error.message || "Unknown error"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleRemoveKey = async () => {
    setIsLoading(true);
    
    try {
      await removeApiKey();
      setApiKeyState("");
      setIsSaved(false);
      toast({
        title: "Success",
        description: "API key removed",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove API key: " + (error.message || "Unknown error"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKeyState(e.target.value);
    setIsSaved(false);
  };
  
  // Auto-save the API key when the component loads if the user is logged in
  useEffect(() => {
    if (isLoggedIn && !isLoading && !isSaved && apiKey) {
      handleSaveKey();
    }
  }, [isLoggedIn, isLoading, isSaved, apiKey]);
  
  if (isLoading) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="py-6">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (!isLoggedIn) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>API Key Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            You need to be logged in to save your API key securely.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLoginRedirect} className="w-full">
            Log in to continue
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>API Key Setup</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="api-key" className="text-sm font-medium block mb-1">
              iLoveAPI Key {isSaved && <span className="text-green-500 text-xs">(Saved)</span>}
            </label>
            <Input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={handleInputChange}
              placeholder="Enter your API key"
              disabled={isLoading}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Your API key is stored securely in the database and is only sent to the API server when making requests.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handleRemoveKey} 
          disabled={!isSaved || isLoading}
        >
          Remove Key
        </Button>
        <Button 
          onClick={handleSaveKey} 
          disabled={isLoading}
        >
          Save Key
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ApiKeySetup;
