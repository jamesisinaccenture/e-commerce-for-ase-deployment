import { useEffect, useMemo } from "react";
import { ChevronsUpDown, DeleteIcon, Edit } from "lucide-react";

import SampleImg from "@/assets/images/image 3.png";
import { Modal } from "@/components/admin/Modal";
import CreateUserForm from "@/components/admin/Users/CreateUserForm";
import UpdateUserForm from "@/components/admin/Users/UpdateUserForm";
import { DataTable } from "@/components/reusable/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useAdminGeneralStore } from "@/hooks/state/admin/useAdminGeneral";
import { useAdminUserStore } from "@/hooks/state/admin/useAdminUser";
import { toast } from "@/hooks/use-toast";
import { closeModal } from "@/lib/utils";
import { IUpdateUserPayload, IUser } from "@/models/admin.model";
import { useUserServices } from "@/services/admin/userServices";
import { ColumnDef } from "@tanstack/react-table";

const UsersPage = () => {
  const { search, setSearch } = useAdminGeneralStore();
  const { getUsers, deleteUser, updateUser } = useUserServices();
  const { users: usersList } = useAdminUserStore();

  const usersColumns: ColumnDef<IUser>[] = [
    {
      id: "user_id",
      accessorKey: "user_id",
      header: "ID",
      cell: ({ row }) => (
        <div className="capitalize w-full h-12 p-1 flex items-center">
          <p className="truncate max-w-10" title={row.getValue("user_id")}>
            {row.index + 1}
          </p>
        </div>
      ),
    },
    {
      accessorKey: "user_img",
      header: "Image",
      cell: ({ row }) => (
        <div className="capitalize w-full h-12 p-1">
          <img
            src={SampleImg}
            alt={row.getValue("username")}
            className="w-full h-full rounded-lg object-contain"
          />
        </div>
      ),
    },
    {
      accessorKey: "first_name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize pl-4">{row.getValue("first_name")}</div>
      ),
    },
    {
      accessorKey: "last_name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize pl-4">{row.getValue("last_name")}</div>
      ),
    },
    {
      accessorKey: "username",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Username <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize pl-4">{row.getValue("username")}</div>
      ),
    },
    {
      accessorKey: "contact_number",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Contact number <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize pl-4">{row.getValue("contact_number")}</div>
      ),
    },
    {
      accessorKey: "address",
      header: "Address",
      cell: ({ row }) => (
        <div className="capitalize min-w-60">{row.getValue("address")}</div>
      ),
    },
    {
      accessorKey: "access_level",
      header: "Access level",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("access_level")}</div>
      ),
    },
    {
      accessorKey: "position",
      header: "Position",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("position")}</div>
      ),
    },
    {
      accessorKey: "branch",
      header: "Branch",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("branch")}</div>
      ),
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("department")}</div>
      ),
    },
    {
      accessorKey: "date_created",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Created <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize text-center">
          {row.getValue("date_created")}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize flex items-center justify-center">
          <Switch
            checked={row.getValue("status") === "1"}
            onCheckedChange={(checked) => {
              const updatedStatus = checked ? "1" : "0";
              updateUser(
                { ...row.original, status: updatedStatus },
                () => {
                  toast({
                    title: `User ${checked ? "activated" : "disabled"} successfully!`,
                    description: `The user's status has been updated.`,
                    variant: "success",
                  });
                }
              );
            }}
          />
        </div>
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="capitalize flex gap-2">
          <div>
            <Modal triggerSize="icon" trigger={<Edit />} variant="ghost">
              <UpdateUserForm
                user={row.original}
                updateUser={(updatedUser: IUpdateUserPayload) => {
                  updateUser(updatedUser, () => {
                    toast({
                      title: "User updated successfully!",
                      description: "The user data has been updated.",
                      variant: "success",
                    });
                    closeModal();
                  });
                }}
              />
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
                <span className="font-bold">{row.getValue("username")}</span> "? This action cannot be undone.
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="destructive"
                  onClick={() => {
                    row.toggleSelected(false);
                    deleteUser(row.original, () => {
                      closeModal();
                      toast({
                        title: "User deleted successfully!",
                        description: "The user has been deleted from the system.",
                        variant: "success",
                      });
                    });
                  }}
                >
                  Delete
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      ),
    },
  ];

  const filteredUsers = useMemo(() => {
    return usersList.filter(
      (user) =>
        (user.first_name &&
          user.first_name.toLowerCase().includes(search.toLowerCase())) ||
        (user.last_name &&
          user.last_name.toLowerCase().includes(search.toLowerCase())) ||
        (user.username &&
          user.username.toLowerCase().includes(search.toLowerCase())) ||
        (user.user_id &&
          user.user_id.toString().toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, usersList]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-3xl">Users Page</h1>
      <div className="flex items-center justify-between w-full">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <Modal trigger="Add new user">
            <CreateUserForm />
          </Modal>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <DataTable columns={usersColumns} data={filteredUsers} />
      </div>
    </div>
  );
};

export default UsersPage;
