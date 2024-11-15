import productImage from "@/assets/images/product-image.jpg";

const ProductSectionCard = (products: any) => {
  return (
    <>
      <div className="flex flex-col justify-center border-2 rounded-xl hover:border-blue-500 shadowx-xl ">
        <div className="container mx-auto">
          <div className="h-48 w-48">
            <img
              src={productImage} // src={products.products.product_img}
              alt={products.product_name}
              className="rounded-t-lg h-fit w-fit"
            />
          </div>
          <div className="flex flex-col text-sm pl-2 pr-2 pb-2 font-semibold font-sans">
            <p>{products.product_name}</p>
            <p>
              "{products.currency} {products.price}"
            </p>
            <hr />
            <p className="text-green-600">Save</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSectionCard;
