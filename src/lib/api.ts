import { IUser } from "@/models/admin.model";

// Fetch all users
export const fetchUsers = async (): Promise<IUser[]> => {
  const response = await fetch("/api/users");
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

// Create a new user
export const createUser = async (newUser: IUser) => {
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to create user");
  return response.json();
};

// Update an existing user
export const updateUser = async (updatedUser: IUser) => {
  const response = await fetch(`/api/users/${updatedUser.user_id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to update user");
  return response.json();
};

// Delete a user
export const deleteUser = async (userId: string) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete user");
};
