import { HTMLInputTypeAttribute } from "react";

// Define the shape of the states here, remember to export them
export interface CountInterface {
  count: number;
  increaseCount: () => void;
  removeCount: () => void;
}
// Define the shape of the states here, remember to export them
export interface ICustomInput {
  ref: React.RefObject<HTMLInputElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isSearch?: boolean;
  value?: any;
  label?: string;
  name?: string;
  checked?: boolean;
  type?: HTMLInputTypeAttribute;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  disabled?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: any;
}

// Products interface
export interface IProduct {
  product_id?: string | undefined;
  product_name: string;
  product_img?: any;
  product_description: string | undefined;
  category?: string[] | null | undefined;
  price: number;
  currency: string;
  sold?: number;
  date_created?: string;
  created_by?: string;
  discount?: number;
  variants?: string[];
  other_details: any;
}

export interface IProductSection {
  products: IProduct[];
  isHome?: boolean;
}

export interface IProductStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

export interface IProductResponse {
  data: {
    products: IProduct[];
  };
}

/*Used in the footer only*/
export interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  contact: string;
}

export interface FooterSectionProps {
  title: string;
  items: string[];
}

export interface EndFooterSectionProps {
  version: string;
}
/*End of footer props*/

export interface DropdownAvatarProps {
  handleLogout: () => void;
}
