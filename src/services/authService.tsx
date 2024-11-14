import axios from "axios";

import { headerConfig } from "@/lib/utils";
import { LoginFormData, SignupFormData } from "@/models/auth.model";

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

      sessionStorage.setItem("token", JSON.stringify(token));
      sessionStorage.setItem("session", JSON.stringify(userResponse.data));
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
export const signupService = async (data: SignupFormData) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/register`, // Replace with your signup API URL
      {
        first_name: data.firstName,
        last_name: data.lastName,
        // email: data.email,
        contact_number: data.phoneNumber,
        address: data.address,
        username: data.username,
        password: data.password,
        date_created: data.dateCreated,
      },
      {
        headers: headerConfig,
      }
    );

    return response.data;
  } catch (error) {
    // Capture specific errors (e.g., 400 for validation issues)
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data.message || "Signup failed";
      console.error("Signup error:", errorMessage);
      throw new Error(errorMessage); // Throw a user-friendly error
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};
