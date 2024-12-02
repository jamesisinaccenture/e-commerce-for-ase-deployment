import { Card } from "@/components/ui/card";
import { ICheckoutShippingAddress } from "@/models/store.model";
import { CircleCheck, SquarePen, Plus } from "lucide-react";

interface ICheckoutShippingSection {
  // data: {
  //   id: string;
  //   name: string;
  //   address: string;
  //   contact_num: string;
  // }[];
  data: ICheckoutShippingAddress[];
  selectedId: string;
  onToggleAddModal?: () => void;
  onToggleUpdateModal: (arg: string) => void;
  onSelectAddress: (arg: string) => void;
}
const CheckoutShippingSection: React.FC<ICheckoutShippingSection> = ({
  data,
  selectedId,
  onToggleAddModal,
  onToggleUpdateModal,
  onSelectAddress,
}) => {
  return (
    <div className="flex items-center overflow-x-scroll custom-h-scroll pb-2 cursor-pointer">
      <div className="mr-5">
        <Plus
          size={25}
          color="#008ECC"
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 cursor-pointer"
          onClick={onToggleAddModal}
        />
      </div>

      {data.map((item) => (
        <Card
          className={`shrink-0 p-3 flex mr-3 ${
            selectedId === item.id ? "border-[#008ECC]" : ""
          }`}
          key={item.id}
        >
          <div className="mr-5 grow" onClick={() => onSelectAddress(item.id)}>
            <div className="font-bold">{item.full_name}</div>
            <div className="line-clamp-2">
              {item.lot_house_apt} {item.street} {item.barangay}, {item.city}
            </div>
            <div>{item.contact_number}</div>
          </div>
          <div
            className={`grid ${
              selectedId === item.id ? "content-between" : "content-end"
            }`}
          >
            {selectedId === item.id && (
              <CircleCheck
                size={16}
                color="#008ECC"
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 "
              />
            )}

            <SquarePen
              size={16}
              color={`${selectedId === item.id ? "#008ECC" : "black"}`}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 cursor-pointer"
              onClick={() => onToggleUpdateModal(item.id)}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CheckoutShippingSection;
