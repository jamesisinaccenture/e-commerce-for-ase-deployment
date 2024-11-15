import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { getToken } from "@/lib/utils";

// Custom Axios Hook
export const useAxios = () => {
  const token = getToken();

  const group_tag = "group2-malakas";
  const API_URL = "https://backend-user-product-management.vercel.app/";

  // Axios instance with default headers
  const api = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      "x-request-id": group_tag,
      Authorization: `Bearer ${token}`,
    },
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data.data;
    },
    (error: AxiosError) => {
      const message = getErrorMessage(error);

      return Promise.reject(new Error(message.message));
    }
  );

  const getErrorMessage = (error: AxiosError): any => {
    if (error.response) {
      return (
        error.response?.data || { message: "An unexpected error occurred" }
      );
    } else if (error.request) {
      return {
        message: "Network error, please try again later",
      };
    } else {
      return error || "An error occurred";
    }
  };

  return api;
};
