import { useMemo, useState } from "react";
import { ChevronsUpDown, DeleteIcon, Edit } from "lucide-react";

import SampleImg from "@/assets/images/image 3.png";
import { Modal } from "@/components/admin/Modal";
import CreateUserForm from "@/components/admin/Products/CreateUserForm";
import { DataTable } from "@/components/reusable/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usersList } from "@/lib/constants";
import { IUser } from "@/models/admin.model";
import { ColumnDef } from "@tanstack/react-table";

const UsersPage = () => {
  const [search, setSearch] = useState("");
  const usersColumns: ColumnDef<IUser>[] = [
    {
      id: "user_id",
      accessorKey: "user_id",
      header: "ID",
      cell: ({ row }) => (
        <div className="capitalize w-full h-12 p-1 flex items-center">
          <p className=" truncate max-w-10" title={row.getValue("user_id")}>
            {row.getValue("user_id")}
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
            // src={row.getValue("user_img")}
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
          Name <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize pl-4">
          {row.getValue("first_name")} {row.getValue("last_name")}
        </div>
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
      header: "branch",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("branch")}</div>
      ),
    },
    {
      accessorKey: "department",
      header: "department",
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
      header: "status",
      cell: ({ row }) => (
        <div className="capitalize">
          {row.getValue("status") === 1 ? "active" : "disabled"}
        </div>
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="capitalize flex gap-2">
          <div>
            <Modal triggerSize="icon" trigger={<Edit />} variant="ghost">
              <CreateUserForm />
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
                <span className="font-bold">{row.getValue("username")}</span> "?
                <br />
                This action cannot be undone.
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="destructive"
                  onClick={() => {
                    row.toggleSelected(false);
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

  const users = useMemo(() => {
    return usersList.filter(
      (user) =>
        user.first_name.toLowerCase().includes(search.toLowerCase()) ||
        user.last_name.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toString().toLowerCase().includes(search.toLowerCase()) ||
        user.user_id?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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
        <DataTable columns={usersColumns} data={users} />
      </div>
    </div>
  );
};

export default UsersPage;
