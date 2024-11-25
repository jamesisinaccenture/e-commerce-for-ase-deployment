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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

<<<<<<< HEAD
export interface IProductData {
  product_id?: string;
  product_name?: string;
  product_img?: string;
  product_description?: string;
  category?: string;
  price?: number;
  currency?: string;
  sold?: number;
  date_created?: string | undefined;
  created_by?: string | undefined;
  variants?: string[];

}
export interface ISampleProductData {
  store_products: IProductData[];
  isHome?: boolean;
=======
export interface IProductResponse {
  data: {
    products: IProduct[];
  };
>>>>>>> 9f188b39956c6b230056ec858a5af0db5eece4d9
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

export interface CartItem{
  product_id: string;
  product_name: string;
  product_img: string;
  description: string;
  quantity: number;
  price: number;
}

export interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (product_id: string) => void;
  increaseQuantity: (product_id: string) => void;
  decreaseQuantity: (product_id: string) => void;
  removeAll: () => void;
}