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

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
