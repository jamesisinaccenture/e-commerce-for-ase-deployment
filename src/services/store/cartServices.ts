import { useAxios } from "@/hooks/useAxios";
import { ICart } from "@/models/store.model";

export const useCartServices = () => {
  const api = useAxios();

  const getCart = async (callback?: (data: ICart) => void) => {
    try {
      const response: ICart = await api.get("/cart");
      if (callback) callback(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getCart,
  };
};
