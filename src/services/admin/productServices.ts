import { useState } from "react";

import { useAdminProductStore } from "@/hooks/state/admin/useAdminProduct";
import { toast } from "@/hooks/use-toast";
import { useAxios } from "@/hooks/useAxios";
import { getUserSession } from "@/lib/utils";
import { IProduct, IProductResponse } from "@/models/admin.model";
import { ENDPOINTS } from "../endpoints";

export const useProductServices = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setProducts } = useAdminProductStore();
  const user = getUserSession();

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
      setIsLoading(false);
    }
  };

  const createProduct = async (
    payload: IProduct,
    callback?: (data: any) => void
  ) => {
    setIsLoading(true);
    try {
      const productPayloads = {
        ...payload,
        category: [],
        created_by: user.username,
      };

      const response: IProductResponse = await api.post(
        ENDPOINTS.PRODUCTS,
        productPayloads
      );

      if (!response.data) {
        toast({
          variant: "destructive",
          title: "Error creating product",
          description: "Please try again.",
        });
        throw new Error("Error: Could not create product");
      }

      if (callback) callback(response);
      getProducts();
      toast({
        variant: "success",
        title: "Create Product",
        description: "Product created successfully",
      });
      return response.data.products;
    } catch (error: any) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Error creating product",
        description:
          error.message || "Error occurred while creating, please try again.",
      });
      throw new Error(error);
    }
  };

  const updateProduct = async (
    payload: IProduct,
    callback?: (data: any) => void
  ) => {
    setIsLoading(true);
    try {
      const response: IProductResponse = await api.put(
        `${ENDPOINTS.PRODUCTS}/${payload.product_id}`,
        payload
      );

      if (!response.data) {
        toast({
          variant: "destructive",
          title: "Error updating product",
          description: "Please try again.",
        });
        throw new Error("Error: Could not update product");
      }

      if (callback) callback(response);
      getProducts();
      toast({
        variant: "success",
        title: "Update Product",
        description: "Product updated successfully",
      });
      return response.data.products;
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Error updating product",
        description:
          error.message || "Error occurred while updating, please try again.",
      });
      throw new Error(error);
    }
  };

  const deleteProduct = async (
    payload: IProduct,
    callback?: (data: any) => void
  ) => {
    setIsLoading(true);
    try {
      const response: IProductResponse = await api.delete(
        `${ENDPOINTS.PRODUCTS}/${payload.product_id}`
      );

      if (!response.data) {
        toast({
          variant: "destructive",
          title: "Error deleting product",
          description: "Please try again.",
        });
        throw new Error("Error: Could not delete product");
      }

      if (callback) callback(response);
      getProducts();
      toast({
        variant: "success",
        title: "Delete Product",
        description: "Product deleted successfully",
      });
      return response;
    } catch (error: any) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Error deleting product",
        description:
          error.message || "Error occurred while deleting, please try again.",
      });
      throw new Error(error);
    }
  };

  return {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct,
    isLoading,
  };
};
