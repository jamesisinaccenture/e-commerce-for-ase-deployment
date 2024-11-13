/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IRoutes {
  component: React.ComponentType<any> | React.ReactNode | any;
  [key: string]: any;
}

export interface IAuthStore {
  isLoading: boolean;
  isAdmin: boolean;
  isAuth: boolean;
  token: string;
  user: any;
  login: (isAdmin: boolean, isAuth: boolean, token: string, user: any) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

export interface LoginFormData {
  username: string;
  password: string;
}
export interface SignupFormData {
  firstName: string;
  lastName: string;
  // email: string;
  phoneNumber?: string;
  address: string;
  username: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  dateCreated?: string;
}

 export interface Product {
 product_id: string;
 product_name: string;
 product_img: string;
 product_description: string;
 category: string;
 price: number;
 currency: string;
 date_created: string;
 created_by: string;
 quantity: number;  // Add quantity if needed for cart items
 }
