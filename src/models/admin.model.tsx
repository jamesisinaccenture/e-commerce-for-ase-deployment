
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
