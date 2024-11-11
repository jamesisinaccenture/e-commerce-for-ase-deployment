
const ProductSectionList = (products: any) => {
  return (
    <>
      <div className="flex flex-col justify-center border-2 rounded-xl hover:border-blue-500 shadowx-xl">
        <div className="container">
          <div className="h-48 w-44">
            <img
              src={products.products.product_img} //sample image.
              alt={products.products.product_name}
              className="rounded-t-lg"
            />
          </div>
          <div className="flex flex-col text-sm pl-2 pr-2 pb-2 font-semibold font-sans">
            <p>{products.products.product_name}</p>
            <p>
              "{products.products.currency} {products.products.price}"
            </p>
            <hr />
            <p className="text-green-600">Save</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSectionList;
