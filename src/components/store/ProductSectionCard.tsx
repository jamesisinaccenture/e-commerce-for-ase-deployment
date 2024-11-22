import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import ProductModal from "@/components/store/ProductModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { IProductData } from "@/models/store.model";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import ProductCardAnimated from "./ProductCardAnimated";
import { Button } from "../ui/button";

const ProductSectionCard = (product: IProductData) => {
  // this is one use case that we need to use local state since using global state for this
  // will result in re-rendering all the cards and will cause to only use the image of the last item in the cart.
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 500);
  };

  useEffect(() => {
    console.log(isAddingToCart);
  }, [isAddingToCart]);
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col justify-between border rounded-lg hover:border-store-primary cursor-pointer"
      >
        <Dialog key={product.product_id}>
          <DialogTrigger asChild>
            <div className="-z-10">
              <AspectRatio ratio={1 / 1}>
                <img
                  src={product.product_img}
                  alt={product.product_name}
                  className="rounded-3xl object-contain bg-cover w-full max-h-[250px] p-4"
                />
                {product.discount ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bg-store-primary p-2 top-0 right-0 rounded-tr-md rounded-bl-lg"
                  >
                    <p className="text-white text-center">
                      {product.discount}%
                      <br /> OFF
                    </p>
                  </motion.div>
                ) : (
                  <></>
                )}
              </AspectRatio>
              <div className="flex flex-col text-sm p-2 font-semibold w-full rounded-b-lg overflow-hidden">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="font-semibold"
                >
                  {product.product_name}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="font-bold"
                >
                  {`${product.currency} ${product.price}`}
                </motion.p>
                <hr className="mt-2 border-[1.2px]" />
              </div>
            </div>
          </DialogTrigger>
          <ProductModal product={product} key={product.product_id} />{" "}
        </Dialog>

        <div className="flex flex-row justify-between p-2 mb-2">
          <Button
            size="sm"
            variant={"default"}
            className="bg-store-primary hover:bg-store-primary/80"
          >
            <Heart size={16} />
          </Button>
          <Button
            size="sm"
            variant={"default"}
            onClick={handleAddToCart}
            className="bg-store-primary hover:bg-store-primary/80"
          >
            Add to Cart
          </Button>
        </div>
        {/*  Add To Cart Animation */}
      </motion.div>
      <div className="fixed w-full h-screen z-9999">
        {isAddingToCart && (
          <ProductCardAnimated
            product_img={product.product_img}
            product_name={product.product_name}
          />
        )}
      </div>
    </>
  );
};

export default ProductSectionCard;
