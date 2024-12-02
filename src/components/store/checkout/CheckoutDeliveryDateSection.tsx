import { Card } from "@/components/ui/card";

interface ICheckoutDeliveryDateSectionProps {
  dates: {
    current: {
      date: string;
      dayOfWeek: string;
    };
    prev: {
      date: string;
      dayOfWeek: string;
    };
    next: {
      date: string;
      dayOfWeek: string;
    };
  };
}
const CheckoutDeliveryDateSection: React.FC<
  ICheckoutDeliveryDateSectionProps
> = ({ dates }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <Card className="text-center bg-gray-300">
          <div className="text-gray-500">{dates.prev.date}</div>
          <div className="text-gray-500">{dates.prev.dayOfWeek}</div>
        </Card>
        <Card className="text-center border-[#008ECC]">
          <div>{dates.current.date}</div>
          <div>{dates.current.dayOfWeek}</div>
        </Card>
        <Card className="text-center">
          <div>{dates.next.date}</div>
          <div>{dates.next.dayOfWeek}</div>
        </Card>
      </div>
    </>
  );
};

export default CheckoutDeliveryDateSection;
