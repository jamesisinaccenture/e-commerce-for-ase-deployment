import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import productImage from "@/assets/images/product-image.jpg";
const sampleCartData = {
  cart_id: "CART001",
  user_id: "USER001",
  items: [
    {
      product_id: "P001",
      product_name: "Wireless Earbuds",
      product_img: "https://example.com/images/earbuds.jpg",
      price: 59.99,
      quantity: 2,
      currency: "USD",
    },
    {
      product_id: "P003",
      product_name: "Smart Watch",
      product_img: "https://example.com/images/smart-watch.jpg",
      price: 199.99,
      quantity: 1,
      currency: "USD",
    },
  ],
  total_price: 319.97,
  currency: "USD",
  date_created: "2024-11-10",
};

const CheckoutCartSection: React.FC = () => {
  return (
    <>
      {sampleCartData.items.map((cart) => (
        <div
          className="flex items-center justify-between py-3 border-b"
          key={cart.product_id}
        >
          <div className="flex pr-4">
            <img src={productImage} className="w-12 mr-3 object-contain" />
            <div className="w-40 md:w-52">
              <div className="font-bold truncate text-ellipsis overflow-hidden text-xs">
                {cart.product_name}
              </div>
              <div className="truncate text-ellipsis overflow-hidden text-xs">
                Brand: Cherry Mobile
              </div>
              <div className="truncate text-ellipsis overflow-hidden text-xs">
                Category: Mobile
              </div>
            </div>
          </div>
          <div className="flex min-w-44">
            <Button className="rounded-full mr-2 bg-[#008ECC]">-</Button>
            <Input className="rounded-full w-20 mr-2 text-center" />
            <Button className="rounded-full bg-[#008ECC]">+</Button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between py-3">
        <div className="flex mr-4">
          <img src={productImage} className="w-12 mr-3 object-contain" />
          <div className="w-40 md:w-52">
            <div className="font-bold truncate text-ellipsis overflow-hidden text-xs">
              Smart Watch w3859ewrf wkejfsdkfj skldfj skldfj skldfj slkdjf
              lskdjf lsdkjf lksdjf
            </div>
            <div className="truncate text-ellipsis overflow-hidden text-xs">
              Brand: Cherry Mobile
            </div>
            <div className="truncate text-ellipsis overflow-hidden text-xs">
              Category: Mobile
            </div>
          </div>
        </div>
        <div className="flex min-w-44">
          <Button className="rounded-full w-full mr-2" variant="destructive">
            Remove
          </Button>
        </div>
      </div>
    </>
  );
};

export default CheckoutCartSection;
