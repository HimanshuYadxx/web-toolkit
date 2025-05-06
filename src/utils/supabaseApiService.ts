import { supabase } from "@/integrations/supabase/client";

// Types
type ApiOptions = {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  apiKeyId?: string;
};

// Function to call the API via Supabase edge function
export const callApiViaSupabase = async <T>(options: ApiOptions): Promise<T> => {
  const { endpoint, method = 'GET', body, apiKeyId } = options;
  
  try {
    const { data, error } = await supabase.functions.invoke('api-proxy', {
      body: {
        endpoint,
        method,
        body,
        apiKeyId
      }
    });
    
    if (error) {
      console.error('Error calling API via Supabase:', error);
      throw new Error(error.message || 'Failed to call API');
    }
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    return data as T;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

// Function to save API key to Supabase
export const saveApiKey = async (apiKey: string): Promise<{ id: string }> => {
  try {
    const { data, error } = await supabase
      .from('user_api_keys')
      .insert({ api_key: apiKey })
      .select('id')
      .single();
    
    if (error) {
      console.error('Error saving API key:', error);
      throw new Error(error.message || 'Failed to save API key');
    }
    
    // Keep a copy in localStorage for UI purposes (not for API calls)
    localStorage.setItem('iLoveApiKeyId', data.id);
    
    return { id: data.id };
  } catch (error) {
    console.error('Save API key error:', error);
    throw error;
  }
};

// Function to check if user has an API key stored
export const hasApiKey = async (): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('user_api_keys')
      .select('id')
      .limit(1);
    
    if (error) {
      console.error('Error checking for API key:', error);
      return false;
    }
    
    return data && data.length > 0;
  } catch (error) {
    console.error('Check API key error:', error);
    return false;
  }
};

// Function to delete an API key
export const removeApiKey = async (apiKeyId?: string): Promise<void> => {
  try {
    const id = apiKeyId || localStorage.getItem('iLoveApiKeyId');
    if (!id) return;
    
    const { error } = await supabase
      .from('user_api_keys')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error removing API key:', error);
      throw new Error(error.message || 'Failed to remove API key');
    }
    
    localStorage.removeItem('iLoveApiKeyId');
  } catch (error) {
    console.error('Remove API key error:', error);
    throw error;
  }
};
