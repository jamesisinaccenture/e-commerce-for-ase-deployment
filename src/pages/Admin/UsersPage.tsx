import { useEffect, useMemo, useState } from "react";
import { ChevronsUpDown, DeleteIcon, Edit } from "lucide-react";

import { Modal } from "@/components/admin/Modal";
import CreateUserForm from "@/components/admin/Users/CreateUserForm";
import { CustomSelect } from "@/components/reusable/CustomSelect";
import { DataTable } from "@/components/reusable/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAdminGeneralStore } from "@/hooks/state/admin/useAdminGeneral";
import { fetchUsers, createUser, updateUser, deleteUser } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { IUser } from "@/models/admin.model";
import { ColumnDef } from "@tanstack/react-table";

const UsersPage = () => {
  const { search, setSearch } = useAdminGeneralStore();
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<string>("");

  // Fetch users on page load
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Sorting function to toggle sorting
  const toggleSort = (column: string) => {
    const isAscending = sortColumn === column && sortDirection === "asc";
    setSortColumn(column);
    setSortDirection(isAscending ? "desc" : "asc");

    const sortedData = [...users].sort((a, b) => {
      const aValue = a[column as keyof IUser];
      const bValue = b[column as keyof IUser];
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    setUsers(sortedData);
  };

  // Handle create user
  const handleCreateUser = async (newUser: IUser) => {
    try {
      const createdUser = await createUser(newUser);
      setUsers([...users, createdUser]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // Handle update user
  const handleUpdateUser = async (updatedUser: IUser) => {
    try {
      const updatedData = await updateUser(updatedUser);
      setUsers(
        users.map((user) =>
          user.user_id === updatedUser.user_id ? updatedData : user
        )
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Handle delete user
  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.user_id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(search.toLowerCase()) ||
        user.last_name.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.user_id?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const usersColumns: ColumnDef<IUser>[] = [
    {
      id: "user_id",
      accessorKey: "user_id",
      header: "ID",
      cell: ({ row }) => <div className="capitalize w-full h-12 p-1 flex items-center">{row.index + 1}</div>,
    },
    {
      accessorKey: "first_name",
      header: () => (
        <Button variant="ghost" onClick={() => toggleSort("first_name")}>
          First Name <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => <div className="capitalize pl-4">{row.getValue("first_name")}</div>,
    },
    {
      accessorKey: "last_name",
      header: () => (
        <Button variant="ghost" onClick={() => toggleSort("last_name")}>
          Last Name <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => <div className="capitalize pl-4">{row.getValue("last_name")}</div>,
    },
    {
      accessorKey: "username",
      header: () => (
        <Button variant="ghost" onClick={() => toggleSort("username")}>
          Username <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => <div className="capitalize pl-4">{row.getValue("username")}</div>,
    },
    {
      accessorKey: "contact_number",
      header: () => (
        <Button variant="ghost" onClick={() => toggleSort("contact_number")}>
          Contact number <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => <div className="capitalize pl-4">{row.getValue("contact_number")}</div>,
    },
    {
      accessorKey: "address",
      header: "Address",
      cell: ({ row }) => <div className="capitalize min-w-60">{row.getValue("address")}</div>,
    },
    {
      accessorKey: "access_level",
      header: "Access level",
      cell: ({ row }) => <div className="capitalize">{row.getValue("access_level")}</div>,
    },
    {
      accessorKey: "date_created",
      header: () => (
        <Button variant="ghost" onClick={() => toggleSort("date_created")}>
          Date Created <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize text-center">
          {formatDate(row.getValue("date_created"))}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <div className="capitalize">{row.getValue("status") === 1 ? "Active" : "Disabled"}</div>,
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="capitalize flex gap-2">
          <div>
            <Modal triggerSize="icon" trigger={<Edit />} variant="ghost">
              <CreateUserForm user={row.original} onSubmit={handleUpdateUser} />
            </Modal>
          </div>
          <div>
            <Modal
              triggerClassName="hover:bg-destructive hover:text-destructive-foreground"
              triggerSize="icon"
              trigger={<DeleteIcon />}
              variant="ghost"
            >
              <h1 className="font-bold text-2xl">Delete User</h1>
              <div>
                Are you sure you want to delete the user "
                <span className="font-bold">{row.getValue("username")}</span>"?
                <br />
                This action cannot be undone.
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="destructive" onClick={() => handleDeleteUser(row.getValue("user_id") || "")}>
                  Delete
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-3xl">Users</h1>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CustomSelect
            items={[{ label: "All", value: "all" }, { label: "ID", value: "user_id" }, { label: "Username", value: "username" }, { label: "Name", value: "name" }]}
            defaultValue={"all"}
            placeholder="Search by"
            onChange={(value: string) => console.log(value)}
          />
        </div>
        <div>
          <Modal trigger="Add User">
            <CreateUserForm onSubmit={handleCreateUser} user={undefined} />
          </Modal>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <DataTable columns={usersColumns} data={filteredUsers} loading={loading} />
      </div>
    </div>
  );
};

export default UsersPage;
