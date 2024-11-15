import { useState } from "react";

import { useAxios } from "@/hooks/useAxios";

export const useProductServices = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const api = useAxios();

  const getProducts = async (callback?: (data: any) => void) => {
    setIsLoading(true);
    console.log("test");

    try {
      const response = await api.get("/products");
      console.log(response);
      setIsLoading(false);
      if (callback) callback(response);
      return response;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return {
    getProducts,
    isLoading,
  };
};
