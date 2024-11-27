import { useState } from "react";

import { useAdminUserStore } from "@/hooks/state/admin/useAdminUser";
import { toast } from "@/hooks/use-toast";
import { useAxios } from "@/hooks/useAxios";
import { IUser, IUserResponse } from "@/models/admin.model";
import { ENDPOINTS } from "../endpoints";

export const useUserServices = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setUsers } = useAdminUserStore();

  const api = useAxios();

  const getUsers = async (callback?: (data: IUser[]) => void) => {
    setIsLoading(true);

    try {
      const response: IUserResponse = await api.get(ENDPOINTS.USERS.GETALL);
      console.log(response);
      if (!response.data.users) throw new Error("Error: Could not get user");

      setIsLoading(false);
      if (callback) callback(response.data.users);
      setUsers(response.data.users);
      return response;
    } catch (error) {
      setIsLoading(false);
    }
  };

  const createUser = async (payload: IUser, callback?: (data: any) => void) => {
    setIsLoading(true);
    try {
      const response: IUserResponse = await api.post(
        ENDPOINTS.USERS.BASE,
        payload
      );

      if (!response.data.users) {
        toast({
          variant: "destructive",
          title: "Error creating user",
          description: "Please try again.",
        });
        throw new Error("Error: Could not create user");
      }

      if (callback) callback(response);
      getUsers();
      toast({
        variant: "success",
        title: "Create User",
        description: "User created successfully",
      });
      return response.data.users;
    } catch (error: any) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Error creating user",
        description:
          error.message || "Error occurred while creating, please try again.",
      });
      throw new Error(error);
    }
  };

  const updateUser = async (payload: IUser, callback?: (data: any) => void) => {
    setIsLoading(true);
    try {
      const response: IUserResponse = await api.put(
        `${ENDPOINTS.USERS.BASE}/${payload.user_id}`,
        payload
      );

      if (!response.data.users) {
        toast({
          variant: "destructive",
          title: "Error updating user",
          description: "Please try again.",
        });
        throw new Error("Error: Could not update user");
      }

      if (callback) callback(response);
      getUsers();
      toast({
        variant: "success",
        title: "Update User",
        description: "User updated successfully",
      });
      return response.data.users;
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Error updating user",
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

      if (!response.data.users) {
        toast({
          variant: "destructive",
          title: "Error deleting user",
          description: "Please try again.",
        });
        throw new Error("Error: Could not delete user");
      }

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
