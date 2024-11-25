import { useEffect } from "react";
import { useMemo } from "react";
import { ChevronsUpDown, DeleteIcon, Edit } from "lucide-react";

import CreateCategoryForm from "@/components/admin/Category/CreateCategory";
import { Modal } from "@/components/admin/Modal";
import { CustomSelect } from "@/components/reusable/CustomSelect";
import { DataTable } from "@/components/reusable/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAdminGeneralStore } from "@/hooks/state/admin/useAdminGeneral";
import { categoryList } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { ICategory } from "@/models/admin.model";
import { useCategoryServices } from "@/services/admin/categoryServices";
import { ColumnDef } from "@tanstack/react-table";

const CategoryPage = () => {
  const { search, setSearch } = useAdminGeneralStore();
  const { getCategory } = useCategoryServices();

  const categoryColumns: ColumnDef<ICategory>[] = [
    {
      id: "category_id",
      accessorKey: "category_id",
      header: "ID",
      cell: ({ row }) => (
        <div className="capitalize w-full h-12 p-1">{row.index + 1}</div>
      ),
    },
    {
      accessorKey: "category_name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category Name <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize px-4">{row.getValue("category_name")}</div>
      ),
    },
    {
      accessorKey: "created_by",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created by <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize px-4">{row.getValue("created_by")}</div>
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
        <div className="capitalize px-4">
          {formatDate(row.getValue("date_created"))}
        </div>
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="capitalize flex gap-2">
          <div>
            <Modal triggerSize="icon" trigger={<Edit />} variant="ghost">
              <CreateCategoryForm />
            </Modal>
          </div>
          <div>
            <Modal
              triggerClassName="hover:bg-destructive hover:text-destructive-foreground"
              triggerSize="icon"
              trigger={<DeleteIcon />}
              variant="ghost"
            >
              <h1 className="font-bold text-2xl">Delete Product</h1>
              <div>
                Are you sure you want to delete the category "
                <span className="font-bold">
                  {row.getValue("category_name")}
                </span>{" "}
                "?
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

  const categories = useMemo(() => {
    return categoryList.filter(
      (product) =>
        product.category_id.toLowerCase().includes(search.toLowerCase()) ||
        product.category_name.toLowerCase().includes(search.toLowerCase()) ||
        product.created_by
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [search]);

  const searchByList = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "ID",
      value: "category_id",
    },
    {
      label: "Category name",
      value: "category_name",
    },
    {
      label: "Created by",
      value: "created_by",
    },
  ];

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-3xl">Category</h1>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CustomSelect
            items={searchByList}
            defaultValue={"all"}
            placeholder="Search by"
            onChange={(value: string) => {
              console.log(value);
            }}
          />
        </div>
        <div>
          <Modal trigger="Add category">
            <CreateCategoryForm />
          </Modal>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <DataTable columns={categoryColumns} data={categories} />
      </div>
    </div>
  );
};

export default CategoryPage;
