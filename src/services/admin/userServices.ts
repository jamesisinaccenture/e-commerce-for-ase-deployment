import { useState } from "react";

import { useAdminUserStore } from "@/hooks/state/admin/useAdminUser";
import { toast } from "@/hooks/use-toast";
import { useAxios } from "@/hooks/useAxios";
import {
  IUser,
  IUserResponse,
  ICreateUserPayload,
  ICreateUserResponse,
  IUpdateUserPayload,
  IUpdateUserResponse,
} from "@/models/admin.model";
import { ENDPOINTS } from "../endpoints";

export const useUserServices = () => {
  const { setUsers } = useAdminUserStore();

  const [isLoading, setIsLoading] = useState(false);
  const api = useAxios();

  const getUsers = async (callback?: (data: IUser[]) => void) => {
    setIsLoading(true);

    try {
      const response: IUserResponse = await api.get(ENDPOINTS.USERS.GETALL);
      console.log(response);
      if (!response.data) throw new Error("Error: Could not get user.");

      setIsLoading(false);
      if (callback) callback(response.data.users);
      setUsers(response.data.users);
      return response;
    } catch (error) {
      setIsLoading(false);
    }
  };

  const createUser = async (
    payload: ICreateUserPayload,
    callback?: (data: IUser[]) => void
  ) => {
    setIsLoading(true);

    try {
      const response: ICreateUserResponse = await api.post(
        ENDPOINTS.USERS.BASE,
        payload
      );
      console.log(response);
      setIsLoading(false);
      if (callback) callback(response.data.user);
      getUsers();
      return response;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const updateUser = async (
    payload: IUpdateUserPayload,
    callback?: (data: IUser[]) => void
  ) => {
    setIsLoading(true);
    console.log(payload, "payload from input");
    try {
      const response: IUpdateUserResponse = await api.put(
        `${ENDPOINTS.USERS.BASE}/${payload.user_id}`,
        payload
      );
      if (callback) callback(response.data.user);
      toast({
        variant: "success",
        title: "Update User",
        description: "User updated successfully",
      });
      getUsers();

      return response.data.user;
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Error updating category",
        description:
          error.message || "Error occurred while updating, please try again.",
      });
      throw new Error(error);
    }
  };

  const deleteUser = async (payload: IUser, callback?: (data: any) => void) => {
    setIsLoading(true);
    try {
      const response: IUserResponse = await api.delete(
        `${ENDPOINTS.USERS.BASE}/${payload.user_id}`
      );

      if (callback) callback(response);
      getUsers();
      toast({
        variant: "success",
        title: "Delete User",
        description: "User deleted successfully",
      });
      return response;
    } catch (error: any) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Error deleting user",
        description:
          error.message || "Error occurred while deleting, please try again.",
      });
      throw new Error(error);
    }
  };

  return {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    isLoading,
  };
};
