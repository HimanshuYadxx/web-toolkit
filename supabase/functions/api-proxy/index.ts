
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Parse request body
    const { endpoint, method = "GET", body, apiKeyId } = await req.json();
    
    // Get auth user
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "No authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      console.error("Auth error:", userError);
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get user's API key
    let apiKey;
    if (apiKeyId) {
      const { data, error } = await supabase
        .from("user_api_keys")
        .select("api_key")
        .eq("id", apiKeyId)
        .eq("user_id", user.id)
        .single();
      
      if (error || !data) {
        console.error("API key fetch error:", error);
        return new Response(
          JSON.stringify({ error: "API key not found" }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      apiKey = data.api_key;
    } else {
      // Get the user's default API key
      const { data, error } = await supabase
        .from("user_api_keys")
        .select("api_key")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();
      
      if (error || !data) {
        console.error("API key fetch error:", error);
        return new Response(
          JSON.stringify({ error: "No API key found for user" }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      apiKey = data.api_key;
    }
    
    // Prepare request
    const baseUrl = "https://api.iloveapi.com"; // Replace with actual API base URL
    const url = `${baseUrl}${endpoint}`;
    
    // Start timing for logging
    const startTime = performance.now();
    
    // Make request to external API
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      }
    };
    
    if (body && (method === "POST" || method === "PUT")) {
      options.body = JSON.stringify(body);
    }
    
    const response = await fetch(url, options);
    const responseData = await response.json();
    
    // Calculate response time
    const endTime = performance.now();
    const responseTime = Math.round(endTime - startTime);
    
    // Log API request
    await supabase.from("api_request_logs").insert({
      user_id: user.id,
      endpoint,
      status: response.status,
      response_time: responseTime
    });
    
    // Return response to client
    return new Response(
      JSON.stringify(responseData),
      { 
        status: response.status, 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json" 
        } 
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
