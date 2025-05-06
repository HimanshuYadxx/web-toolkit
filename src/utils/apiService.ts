
// Utility for making API calls
type ApiOptions = {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
};

export const getApiKey = (): string | null => {
  return localStorage.getItem('iLoveApiKey');
};

export const setApiKey = (key: string): void => {
  localStorage.setItem('iLoveApiKey', key);
};

export const removeApiKey = (): void => {
  localStorage.removeItem('iLoveApiKey');
};

export const hasApiKey = (): boolean => {
  return !!getApiKey();
};

export const callApi = async <T>({ endpoint, method = 'GET', body, headers = {} }: ApiOptions): Promise<T> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    throw new Error('API key not found. Please set your API key first.');
  }
  
  const baseUrl = 'https://api.iloveapi.com'; // Replace with actual API base URL
  
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      ...headers
    }
  };
  
  if (body && (method === 'POST' || method === 'PUT')) {
    options.body = JSON.stringify(body);
  }
  
  const response = await fetch(`${baseUrl}${endpoint}`, options);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `API call failed with status: ${response.status}`);
  }
  
  return response.json();
};
