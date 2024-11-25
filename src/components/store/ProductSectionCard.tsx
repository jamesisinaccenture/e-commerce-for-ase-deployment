import { useEffect, useState } from "react";
import defaultImage from "/image 3.png";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import ProductModal from "@/components/store/ProductModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { formatPrice } from "@/lib/utils";
import { IProduct } from "@/models/store.model";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import ProductCardAnimated from "./ProductCardAnimated";
import { Button } from "../ui/button";

const ProductSectionCard = ({ product_id, product_name, product_img, price, currency, discount }: IProduct) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 500);
  };

  useEffect(() => {
    console.log("isAddingToCart", isAddingToCart);
  }, [isAddingToCart]);

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.005,
          boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col justify-between border rounded-lg hover:border-store-primary cursor-pointer"
      >
        <Dialog key={product_id}>
          <DialogTrigger asChild>
            <div className="-z-10">
              <AspectRatio ratio={1 / 1} className="overflow-hidden rounded-t-lg">
                <div className="rounded-lg overflow-hidden w-full p-4">
                  <img
                    src={product_img || defaultImage}
                    alt={product_name}
                    className="rounded-3xl object-contain bg-cover w-full max-h-[200px]"
                  />
                </div>
                {discount ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bg-store-primary p-2 top-0 right-0 rounded-tr-md rounded-bl-lg"
                  >
                    <p className="text-white text-center">
                      {discount}%
                      <br /> OFF
                    </p>
                  </motion.div>
                ) : null}
              </AspectRatio>
              <div className="flex flex-col text-sm p-2 font-semibold w-full rounded-b-lg overflow-hidden">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="font-semibold"
                >
                  {product_name}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="font-bold"
                >
                  {formatPrice(price || 0, currency)}
                </motion.p>
                <hr className="mt-2 border-[1.2px]" />
              </div>
            </div>
          </DialogTrigger>
          <ProductModal product={{ product_id, product_name, product_img, price, currency, discount }} />
        </Dialog>

        <div className="flex flex-row justify-between p-2 mb-2">
          <Button size="sm" variant="default" className="bg-store-primary hover:bg-store-primary/80">
            <Heart size={16} />
          </Button>
          <Button
            size="sm"
            variant="default"
            onClick={handleAddToCart}
            className="bg-store-primary hover:bg-store-primary/80"
          >
            Add to Cart
          </Button>
        </div>
      </motion.div>
      {isAddingToCart && (
        <div className="fixed w-full h-screen z-9999">
          <ProductCardAnimated product_img={product_img} product_name={product_name} />
        </div>
      )}
    </>
  );
};

export default ProductSectionCard;

