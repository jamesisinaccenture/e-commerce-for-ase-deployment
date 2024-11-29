import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCartServices } from "@/services/store/cartServices";
import { useCheckoutService } from "@/services/store/checkoutService";
import { useCheckoutStore } from "@/hooks/state/store/useCheckout";

import { Button } from "@/components/ui/button";
import CheckoutShippingSection from "@/components/store/checkout/CheckoutShippingSection";
import CheckoutCartSection from "@/components/store/checkout/CheckoutCartSection";
import CheckoutAddAddressModal from "@/components/store/checkout/CheckoutAddAddressModal";
import CheckoutUpdateAddressModal from "@/components/store/checkout/CheckoutUpdateAddressModal";
import CheckoutDeliveryDateSection from "@/components/store/checkout/CheckoutDeliveryDateSection";
import CheckPaymentSection from "@/components/store/checkout/CheckoutPaymentSection";

const sampleShippingAddressData = [
  {
    id: "1",
    name: "Bryan Caranza",
    address: "Adarna St. Sampaloc Manila, Philippine Airline @ yahoo dot Com",
    contact_num: "+(63) 0908 123 1233",
  },
  {
    id: "2",
    name: "2 Bryan Caranza",
    address: "Adarna St. Sampaloc Manila, Philippine Airline @ yahoo dot Com",
    contact_num: "+(63) 0908 123 1233",
  },
  {
    id: "3",
    name: "3 Bryan Caranza",
    address: "Adarna St. Sampaloc Manila, Philippine Airline @ yahoo dot Com",
    contact_num: "+(63) 0908 123 1233",
  },
];

const CheckoutPage = () => {
  const { getCart } = useCartServices();
  const navigate = useNavigate();

  const [displayAddAdressModal, setDisplayAddAddressModal] = useState(false);
  const [displayUpdateAdressModal, setDisplayUpdateAddressModal] =
    useState(false);
  const [selectedShippingId, setSelectedShippingId] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("1");
  const [deliveryDate, setDeliveryDates] = useState({
    current: {
      date: "",
      dayOfWeek: "",
    },
    prev: {
      date: "",
      dayOfWeek: "",
    },
    next: {
      date: "",
      dayOfWeek: "",
    },
  });

  const { fetchShippingAddress } = useCheckoutService();
  const { shippingAddresses, setShippingAddressInput } = useCheckoutStore();

  // Get date, ex: Nov 18
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  // Get day, ex: Mon
  const formatDayOfWeek = (day: number) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return daysOfWeek[day].slice(0, 3);
  };

  const getDeliveryDates = () => {
    const currentDate = new Date();

    const prevDate = new Date(currentDate);
    prevDate.setDate(currentDate.getDate() - 1);

    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);

    const dates = {
      current: {
        date: formatDate(currentDate),
        dayOfWeek: formatDayOfWeek(currentDate.getDay()),
      },
      prev: {
        date: formatDate(prevDate),
        dayOfWeek: formatDayOfWeek(prevDate.getDay()),
      },
      next: {
        date: formatDate(nextDate),
        dayOfWeek: formatDayOfWeek(nextDate.getDay()),
      },
    };

    setDeliveryDates(dates);
  };

  useEffect(() => {
    getCart();
    getDeliveryDates();
    fetchShippingAddress();
  }, []);

  const onToggleAddAddressModal = () => {
    setDisplayAddAddressModal(!displayAddAdressModal);
  };

  const onToggleUpdateAdressModal = (id?: string) => {
    if (id) {
      const input = shippingAddresses.filter((item) => item.id === id);
      setShippingAddressInput(input[0]);
    }
    setDisplayUpdateAddressModal(!displayUpdateAdressModal);
  };

  const onSelectAddress = (id: string) => {
    console.log("id", id);
    setSelectedShippingId(id);
  };

  const onSubmitPlaceOrder = () => {
    navigate("/store/checkout/success");
  };
  return (
    <>
      <h1 className="font-bold text-4xl mb-10  py-4">Checkout</h1>
      <div className="lg:grid lg:grid-cols-2 gap-20 w-full">
        <div>
          {" "}
          <div className="mb-6">
            <h2 className="font-bold text-2xl mb-4">
              Shipping <span className="text-[#008ECC]">Address</span>
            </h2>
            <CheckoutShippingSection
              data={shippingAddresses}
              selectedId={selectedShippingId}
              onToggleAddModal={onToggleAddAddressModal}
              onToggleUpdateModal={onToggleUpdateAdressModal}
              onSelectAddress={onSelectAddress}
            />
          </div>
          <div className="mb-6">
            <h2 className="font-bold text-2xl mb-4">
              Delivery <span className="text-[#008ECC]">Date</span>
            </h2>
            <CheckoutDeliveryDateSection dates={deliveryDate} />
          </div>
          <div className="mb-6">
            <h2 className="font-bold text-2xl mb-4">
              Payment <span className="text-[#008ECC]">Method</span>
            </h2>
            <CheckPaymentSection />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-4">
            Cart <span className="text-[#008ECC]">Details</span>
          </h2>
          <CheckoutCartSection />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Button
          className="flex justify-between rounded-lg bg-[#008ECC] min-w-60"
          onClick={onSubmitPlaceOrder}
        >
          <span className="font-bold">Total: 500</span>
          <span className="font-bold">Place Order</span>
        </Button>
      </div>
      <CheckoutAddAddressModal
        isShow={displayAddAdressModal}
        onToggleModal={onToggleAddAddressModal}
      />
      <CheckoutUpdateAddressModal
        isShow={displayUpdateAdressModal}
        onToggleModal={onToggleUpdateAdressModal}
      />
    </>
  );
};

export default CheckoutPage;
