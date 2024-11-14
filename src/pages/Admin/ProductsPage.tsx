import CustomInput from "@/components/reusable/CustomInput";
import { DataTable } from "@/components/reusable/DataTable";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-3xl">Products Page</h1>
      <div className="flex items-center justify-between">
        <CustomInput />
        <Button>Add new product</Button>
      </div>
      <DataTable columns={[]} data={[]} filterColumn="email" />
    </div>
  );
};

export default ProductsPage;
