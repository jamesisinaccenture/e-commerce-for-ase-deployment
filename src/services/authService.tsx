import axios from "axios";

import { headerConfig } from "@/lib/utils";
<<<<<<< HEAD
import { LoginFormData, SignupFormData } from "@/models/auth.model";
=======
import { LoginFormData } from "@/models/auth.model";
>>>>>>> 267e3d4580dc3d5ae55f261e6e373cc0cc02c980

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

export const signupService = async (data: SignupFormData) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/register`, // Replace with your signup API URL
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        contact_number: data.phoneNumber,
        address: data.address,
        username: data.username,
        password: data.password,
        date_created: data.dateCreated, // Optional, if you want to pass the creation date
      },
      {
        headers: headerConfig, // Include any necessary headers
      }
    );

    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};