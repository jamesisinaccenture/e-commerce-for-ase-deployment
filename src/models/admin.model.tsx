
export interface IProduct {
  product_id?: string;
  product_name: string;
  product_img: string;
  product_description: string;
  category: string;
  price: number;
  currency: string;
  sold?: number;
  date_created?: string;
  created_by?: string;
}

export interface IDropImageInput {
  onImageDrop?: (file: File) => void;
  value?: string;
}

export interface IUser {
  first_name: string;
  last_name: string;
  username: string;
  contact_number: string;
  address: string;
  date_created?: string;
  password?: string;
  access_level: string;

  user_id?: string;
  user_img: any;
  position?: string | null;
  department?: string | null;
  branch?: string | null;
  group_tag?: string | null;
  status?: number; // 0 = disabled, 1 = enabled}
}
