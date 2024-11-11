import axios from "axios";

import { headerConfig } from "@/lib/utils";
import { LoginFormData } from "@/models/auth.model";

const API_URL = import.meta.env.VITE_BACKEND_API_URL_ENDPOINT;

export const loginService = async (data: LoginFormData) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/login`,
      {
        username: data.username,
        password: data.password,
      },
      {
        headers: headerConfig,
      }
    );

    if (response) {
      const token = response.data.data.token;
      const userResponse = await axios.get(`${API_URL}/user`, {
        headers: {
          ...headerConfig,
          Authorization: `Bearer ${token}`,
        },
      });

      return { ...userResponse.data, token };
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const logoutService = async () => {
  const token = JSON.parse(sessionStorage.getItem("token") || "{}");
  try {
    const response = await axios.post(
      `${API_URL}/auth/logout`,
      {},
      {
        headers: {
          ...headerConfig,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
