import axios from "axios";

import { useAuthStore } from "@/hooks/state/auth/useAuth";
import { API_URL } from "@/lib/constants";
import { getToken, headerConfig } from "@/lib/utils";
import {
  LoginFormData,
  SignupFormData,
  UpdateInformationFormData,
} from "@/models/auth.model";

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
  } catch (error: any) {
    throw error.response.data;
  }
};

export const logoutService = async () => {
  const token = getToken();

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
  } catch (error: any) {
    // // Capture specific errors (e.g., 400 for validation issues)
    // if (axios.isAxiosError(error) && error.response) {
    //   const errorMessage = error.response.data.message || "Signup failed";
    //   console.error("Signup error:", errorMessage);
    //   throw new Error(errorMessage); // Throw a user-friendly error
    // } else {
    //   console.error("Unexpected error:", error);
    //   throw new Error("An unexpected error occurred.");
    // }

    throw error.response.data;
  }
};

export const getUserInformation = async () => {
  const { updateUserInfo } = useAuthStore();
  try {
    const token = getToken();
    const userResponse = await axios.get(`${API_URL}/user`, {
      headers: {
        ...headerConfig,
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("Noreen wag mo galawin", userResponse);

    if (userResponse) {
      const user = userResponse.data.data;
      updateUserInfo(user);
      // sessionStorage.setItem("user", JSON.stringify(user));
    }

    return userResponse;
  } catch (error) {
    console.error("Unexpected error in get information:", error);
    throw new Error("An unexpected error occurred.");
  }
};

export const updateInformationService = async (
  data: UpdateInformationFormData
) => {
  try {
    const token = getToken();
    const response = await axios.put(
      `${API_URL}/user/${data.user_id}`,
      {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        contact_number: data.contact_number,
        username: data.username,
        // email: data.email,
        // date_created: data.date_created,
        // password: data.old_password,
        // new_password: data.new_password,
      },
      {
        headers: {
          ...headerConfig,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage =
        error.response.data.message || "Editing profile failed.";
      console.error("Edit profile error:", errorMessage);
      throw new Error(errorMessage);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred.");
    }
  }
};
