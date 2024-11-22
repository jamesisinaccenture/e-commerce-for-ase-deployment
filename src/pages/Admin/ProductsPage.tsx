import { useEffect } from "react";
import { useMemo } from "react";
import { ChevronsUpDown, DeleteIcon, Edit } from "lucide-react";

import SampleImg from "@/assets/images/image 3.png";
import { Modal } from "@/components/admin/Modal";
import CreateProductForm from "@/components/admin/Products/CreateProductForm";
import UpdateProductForm from "@/components/admin/Products/UpdateProductForm";
import { CustomSelect } from "@/components/reusable/CustomSelect";
import { DataTable } from "@/components/reusable/DataTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAdminGeneralStore } from "@/hooks/state/admin/useAdminGeneral";
import { useAdminProductStore } from "@/hooks/state/admin/useAdminProduct";
import { closeModal, formatDate, formatPrice } from "@/lib/utils";
import { IProduct } from "@/models/admin.model";
import { useProductServices } from "@/services/admin/productServices";
import { DialogClose } from "@radix-ui/react-dialog";
import { ColumnDef } from "@tanstack/react-table";

const ProductsPage = () => {
  const { search, setSearch } = useAdminGeneralStore();
  const { products } = useAdminProductStore();

  const { getProducts, deleteProduct, isLoading } = useProductServices();

  const productColumns: ColumnDef<IProduct>[] = [
    {
      id: "product_id",
      accessorKey: "product_id",
      header: "ID",
      cell: ({ row }) => (
        <div className="capitalize w-full h-12 p-1">{row.index + 1}</div>
      ),
    },
    {
      accessorKey: "product_img",
      header: "Product Image",
      cell: ({ row }) => (
        <div className="capitalize w-full h-12 p-1">
          <img
            // src={row.getValue("product_img")}
            src={SampleImg}
            alt={row.getValue("product_name")}
            className="w-full h-full rounded-lg object-contain"
          />
        </div>
      ),
    },
    {
      accessorKey: "product_name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize px-4">{row.getValue("product_name")}</div>
      ),
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category <ChevronsUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="capitalize px-4">{row.getValue("category")}</div>
      ),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <div className="capitalize">{formatPrice(row.getValue("price"))}</div>
      ),
    },
    {
      accessorKey: "currency",
      header: "Currency",
      cell: ({ row }) => (
        <div className="uppercase">{row.getValue("currency")}</div>
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
              <UpdateProductForm product={row.original} />
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
                Are you sure you want to delete the product "
                <span className="font-bold">
                  {row.getValue("product_name")}
                </span>{" "}
                "?
                <br />
                This action cannot be undone.
              </div>
              <div className="flex justify-end gap-2">
                <DialogClose asChild>
                  <Button variant="ghost" id="closeModal">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  id="submit"
                  variant="destructive"
                  disabled={isLoading}
                  onClick={() => deleteProduct(row.original, closeModal)}
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

  const productsData: IProduct[] = useMemo(() => {
    return products.filter(
      (product) =>
        product.product_name.toLowerCase().includes(search.toLowerCase()) ||
        // product?.category?.toLowerCase().includes(search.toLowerCase()) ||
        product.price.toString().toLowerCase().includes(search.toLowerCase()) ||
        product.currency.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  useEffect(() => {
    getProducts();
  }, []);
  const searchByList = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "ID",
      value: "product_id",
    },
    {
      label: "Product name",
      value: "product_name",
    },
    {
      label: "Category name",
      value: "category_name",
    },
    {
      label: "Currency",
      value: "currency",
    },
    {
      label: "Created by",
      value: "created_by",
    },
  ];

  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-3xl">Products</h1>
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
          <Modal trigger="Add product">
            <CreateProductForm />
          </Modal>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <DataTable columns={productColumns} data={productsData} />
      </div>
    </div>
  );
};

export default ProductsPage;
