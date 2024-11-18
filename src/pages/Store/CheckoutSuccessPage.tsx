import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <>
      <div className="w-full text-center mt-10 flex flex-col items-center">
        <ShoppingCart size={120} color="#008ECC" className="mb-5" />
        <h1 className="font-bold text-2xl text-[#008ECC]">Yay! Its done</h1>
        <p>Thank you for purchasing</p>
        <p className="mb-5">
          Transaction#: <span className="text-[#008ECC] font-bold">0000</span>
        </p>
        <p className="text-[#008ECC] mb-12 font-bold">
          We'll process your goods immediately
        </p>
        <Link to="/" className="text-[#008ECC] font-bold underline mb-3">
          Shop again
        </Link>
      </div>
    </>
  );
};

export default CheckoutSuccessPage;
