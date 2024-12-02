import { motion } from "framer-motion";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const ProductCardAnimated = ({
  product_img,
  product_name,
}: {
  product_img: string | undefined;
  product_name: string | undefined;
}) => {
  return (
    <>
      <motion.div
        key="cart-animated"
        className="fixed top-0 left-0 z-50" // Use fixed to position relative to the viewport
        initial={{
          scale: 1,
          opacity: 0.8,
          x: "calc(50vw - 50px)",
          y: "calc(50vh - 50px)",
        }}
        animate={{
          scale: 0.05,
          opacity: 0,
          x: "calc(350vw - 100px)",
          y: "-450vh",
        }}
        transition={{ duration: 8 }}
        onAnimationComplete={() => {
          //call the addToCart function
        }}
      >
        <motion.div
          className="flex flex-col justify-between border rounded-xl"
          style={{ width: "100px", height: "100px" }}
        >
          <AspectRatio ratio={1 / 1}>
            <img
              src={product_img}
              alt={product_name}
              className="rounded-3xl object-contain bg-cover w-full h-full"
            />
          </AspectRatio>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProductCardAnimated;
