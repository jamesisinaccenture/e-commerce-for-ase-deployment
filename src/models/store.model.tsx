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
  value?: string;
  label?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  isRequired?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: any;
  className?: any;
}

// We will change this to the actual later on depending on the structure, as for now this is template only
export interface IProduct {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IProductStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  addProduct: (product: IProduct) => void;
  clearProducts: () => void;
}

export interface IProductData {
  product_id: string;
  product_name?: string;
  product_img?: string;
  product_description?: string;
  category?: string;
  price?: number;
  currency?: string;
  sold?: number;
  date_created: string;
  created_by: string;
}
export interface ISampleProductData {
  store_products: IProductData[];
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
