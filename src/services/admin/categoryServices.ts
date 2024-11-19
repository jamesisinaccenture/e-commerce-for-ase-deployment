import { useState } from "react";

import { useAxios } from "@/hooks/useAxios";
import { ICategory } from "@/models/admin.model";
import { ENDPOINTS } from "../endpoints";

export const useCategoryServices = () => {
  const [isLoading, setIsLoading] = useState(false);
  const api = useAxios();
  const getCategory = async (callback?: (data: ICategory[]) => void) => {
    setIsLoading(true);

    try {
      const response: ICategory[] = await api.get(ENDPOINTS.CATEGORY.GETALL);
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
    getCategory,
    isLoading,
  };
};
