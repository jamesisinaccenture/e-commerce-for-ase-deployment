import { IProductData } from "@/models/store.model";

const ProductSectionCard = ({
  product_name,
  product_img,
  currency,
  price,
}: IProductData) => {
  return (
    <>
      <div className="flex flex-col justify-between border rounded-xl hover:border-blue-500 hover:shadow-md">
        <div className="p-2 rounded-lg">
          <img
            src={product_img}
            alt={product_name}
            className="rounded-3xl object-contain bg-cover w-full h-48"
          />
        </div>
        <div className="flex flex-col text-sm p-2 font-semibold w-full rounded-b-lg overflow-hidden">
          <p>{product_name}</p>
          <p>{`${currency} ${price}`}</p>
          <p>More details here</p>
          <hr />
          <a href="#" className="text-[#E3BC01] pt-2">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductSectionCard;
