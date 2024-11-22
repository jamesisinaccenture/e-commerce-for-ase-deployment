import { useState } from "react";

import { useProductStore } from "@/hooks/state/store/useProduct";
import { useAxios } from "@/hooks/useAxios";
import { IProduct, IProductResponse } from "@/models/store.model";
import { ENDPOINTS } from "../endpoints";

const useProductSevices = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setProducts } = useProductStore();
  const api = useAxios();

  const getProducts = async (callback?: (data: IProduct[]) => void) => {
    setIsLoading(true);

    try {
      const response: IProductResponse = await api.get(ENDPOINTS.PRODUCTS);

      if (!response.data) throw new Error("Error: Could not get product");

      setIsLoading(false);
      if (callback) callback(response.data.products);
      setProducts(response.data.products);
      return response;
    } catch (error) {
      console.log("erroooooooooooor", error);

      setIsLoading(false);
    }
  };

  return {
    isLoading,
    getProducts,
  };
};

export default useProductSevices;
