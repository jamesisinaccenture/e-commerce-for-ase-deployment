import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";

// We need to change this later to Eric's base backend URL
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// Define the types for the parameters
interface UseAxiosProps {
  url: string;
  method: Method; // Type the method to accept valid HTTP methods
  body?: string | null; // Assuming body is a JSON string
  headers?: string | null; // Assuming headers is a JSON string
}

const useAxios = ({
  url,
  method,
  body = null,
  headers = null,
}: UseAxiosProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    const config: AxiosRequestConfig = {
      headers: headers ? JSON.parse(headers) : undefined, // Parse headers if provided
    };

    try {
      const res = await axios({
        url,
        method: method.toLowerCase() as Method, // Convert method to lowercase since axios only use the lowercased methods
        data: body ? JSON.parse(body) : undefined, // Pass the body
        ...config,
      });
      setResponse(res.data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      ); // Store error message
    } finally {
      setLoading(false);
    }
  }, [url, method, body, headers]); // Dependencies for useCallback

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Only call fetchData when it changes

  return { response, error, loading };
};

export default useAxios;
