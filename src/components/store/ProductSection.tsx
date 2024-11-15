import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { IProductData, ISampleProductData } from "@/models/store.model";

import ProductModal from "@/components/store/ProductModal";
import ProductSectionCard from "@/components/store/ProductSectionCard";

const ProductSection = ({ store_products }: ISampleProductData) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
        {store_products.map((product: IProductData) => (
          <Dialog key={product.product_id}>
            <DialogTrigger asChild>
              <div>
                <ProductSectionCard {...product} />
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
