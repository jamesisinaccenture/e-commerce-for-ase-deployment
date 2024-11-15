import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { API_URL } from "@/lib/constants";
import { getToken, headerConfig } from "@/lib/utils";
import { useAuthStore } from "./state/useAuth";

export const useAxios = () => {
  const { isAuth }: any = useAuthStore();
  const token = getToken();

  let Authorization = isAuth ? `Bearer ${token}` : undefined;

  const api = axios.create({
    baseURL: API_URL,
    headers: {
      ...headerConfig,
      Authorization,
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
