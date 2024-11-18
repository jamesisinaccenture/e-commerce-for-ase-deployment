import { MessageCircle, Phone } from "lucide-react";

import mask from "@/assets/images/mask.png";
import playStore from "@/assets/images/playstore.png";
import { categories, services } from "@/lib/constants";
import {
  ContactInfoProps,
  EndFooterSectionProps,
  FooterSectionProps,
} from "@/models/store.model";

const StoreFooter = () => {
  return (
    <footer className="relative bg-[#008ECC] ">
      <div className="grid grid-cols-1 md:grid-cols-3 py-8 px-8 md:py-20 md:px-32">
        <div className="z-10">
          <h1 className="text-white text-4xl font-bold">Mobile Center</h1>

          <div className="mt-10">
            <h3 className="text-white font-semibold mb-2 border-b-2 border-white w-[100px]">
              Contact Us
            </h3>
            <div className="flex flex-row md:flex-col gap-5 mt-5">
              <ContactInfo
                icon={<MessageCircle size={20} color="white" />}
                label="Whats App"
                contact="+1 202-918-2132"
              />
              <ContactInfo
                icon={<Phone size={20} color="white" />}
                label="Call Us"
                contact="+1 202-918-2132"
              />

              {/* Download Section */}
              <div className="z-10">
                <h3 className="text-white font-semibold mb-2 border-b-2 border-white w-max mt-5">
                  Download App
                </h3>
                <img
                  src={playStore}
                  alt="Play Store"
                  className="object-contain mt-5 w-5/6 hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <FooterSection
          title="Most Popular Categories"
          items={categories.slice(0, 8)}
        />

        {/* Services Section */}
        <FooterSection title="Customer Services" items={services} />

        {/* Background Mask Image */}
        <img
          src={mask}
          alt="Mask Image"
          className="absolute top-0 right-0 z-0 sm:block w-[321px] h-[401px]"
        />
      </div>
      <div className="w-full h-auto">
        <EndFooterSection version="v.0.1.0" />
      </div>
    </footer>
  );
};

// Reusable ContactInfo Component
const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, contact }) => (
  <div className="flex items-center gap-2">
    {icon}
    <div>
      <p className="text-white">{label}</p>
      <span className="text-white">{contact}</span>
    </div>
  </div>
);

// Reusable FooterSection Component for Lists
const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div className="z-10">
    <div className="border-b-2 border-white w-7/12">
      <h3 className="text-white font-semibold mb-2 w-max">{title}</h3>
    </div>

    <ul className="text-white list-disc list-inside grid grid-cols-3 md:grid-cols-1 gap-4 pl-5 mt-8">
      {items.map((item, index) => (
        <li key={index} className="hover:cursor-pointer hover:underline ">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
const EndFooterSection = ({ version }: EndFooterSectionProps) => {
  return (
    <div className="z-10 text-center">
      <h3 className="text-white font-regular mb-2 w-full mt-5">
        Copyright &copy; {new Date().getFullYear()} | All Rights Reserved Mobile
        Center.{" "}
      </h3>
      <span className="text-xs font-regular text-white">
        Current version: {version}
      </span>
    </div>
  );
};

export default StoreFooter;
