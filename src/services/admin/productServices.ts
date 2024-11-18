import { useState } from "react";

import { useAxios } from "@/hooks/useAxios";
import { IProduct } from "@/models/admin.model";

export const useProductServices = () => {
  const [isLoading, setIsLoading] = useState(false);
  const api = useAxios();

  const getProducts = async (callback?: (data: IProduct[]) => void) => {
    setIsLoading(true);

    try {
      const response: IProduct[] = await api.get("/products");
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
