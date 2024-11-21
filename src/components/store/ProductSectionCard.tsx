import { IProductData } from "@/models/store.model";
import { useCartStore } from "@/store/useCartStore";

const ProductSectionCard = ({
  product_name,
  product_img,
  currency,
  price,
  product_id,
}: IProductData) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToCart = useCartStore((state: { addToCart: any }) => state.addToCart);

  return (
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
        <a
          href="#"
          className="text-[#E3BC01] pt-2"
          onClick={(e) => {
            e.preventDefault();
            addToCart({ ...{ product_name, product_img, currency, price, product_id }, quantity: 1 });
          }}
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductSectionCard;
