
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getApiKey, setApiKey, removeApiKey } from "@/utils/apiService";
import { toast } from "@/hooks/use-toast";

const ApiKeySetup = () => {
  const [apiKey, setApiKeyState] = useState<string>("");
  const [isSaved, setIsSaved] = useState<boolean>(false);
  
  useEffect(() => {
    const savedKey = getApiKey();
    setIsSaved(!!savedKey);
    if (savedKey) {
      // Mask the key for security
      setApiKeyState("●".repeat(20));
    }
  }, []);
  
  const handleSaveKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setApiKey(apiKey);
      setIsSaved(true);
      toast({
        title: "Success",
        description: "API key saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save API key",
        variant: "destructive",
      });
    }
  };
  
  const handleRemoveKey = () => {
    removeApiKey();
    setApiKeyState("");
    setIsSaved(false);
    toast({
      title: "Success",
      description: "API key removed",
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKeyState(e.target.value);
    setIsSaved(false);
  };
  
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
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Your API key is stored securely in your browser and is only sent to the API server when making requests.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleRemoveKey} disabled={!isSaved}>
          Remove Key
        </Button>
        <Button onClick={handleSaveKey}>Save Key</Button>
      </CardFooter>
    </Card>
  );
};

export default ApiKeySetup;
