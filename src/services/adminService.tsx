import { useState } from "react";
import axios from "axios";

import { API_URL } from "@/lib/constants";
import { headerConfig } from "@/lib/utils";
import { ENDPOINTS } from "./endpoints";

export const adminService = () => {
  const [isLoading, setIsloading] = useState(false);

  const getProduct = async () => {
    try {
      const response = await axios.post(`${API_URL}${ENDPOINTS.PRODUCTS}`, {
        headers: headerConfig,
      });

      console.log(response);
      return response;
    } catch (error) {}
  };

  return { isLoading, setIsloading, getProduct };
};
