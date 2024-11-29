import { Card } from "@/components/ui/card";
import { Banknote } from "lucide-react";

const CheckPaymentSection = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <Card className="flex items-center flex-col p-4 border-[#008ECC] cursor-pointer">
          <Banknote
            size={44}
            color="#008ECC"
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
          />
          <div>Cash on Delivery</div>
        </Card>
      </div>
    </>
  );
};

export default CheckPaymentSection;
