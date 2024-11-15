import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ISampleProductData } from "@/models/store.model";
import ProductModal from "./ProductModal";
import ProductSectionCard from "./ProductSectionCard";

const ProductSection = ({ store_products }: ISampleProductData) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
        {store_products.map((product) => (
          <Dialog key={product.product_id}>
            <DialogTrigger asChild>
              <div>
                <ProductSectionCard products={product} />
              </div>
            </DialogTrigger>
            <ProductModal product={product} />
          </Dialog>
        ))}
      </div>
    </>
  );
};

export default ProductSection;
