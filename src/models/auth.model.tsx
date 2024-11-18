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
  updateUserInfo: (user: any) => void;
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

export interface InformationFormData {
  first_name: string;
  last_name: string;
  contact_number: string;
  address: string;
  date_created: string;
  username: string;
  access_level: string;
  user_img: string;
}

export interface UpdateInformationFormData {
  user_id: string;
  first_name: string;
  last_name: string;
  address: string;
  contact_number: string;
  username: string;
  // email: string;
  // user_img: string;
  // date_created: string;
  // old_password?: string;
  // new_password?: string;
  // confirm_new_password?: string;
}

export interface UpdateInformationFormDataForStore {
  data: UpdateInformationFormData;
  setData: (data: UpdateInformationFormData) => void;
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
  quantity: number; // Add quantity if needed for cart items
}

export interface ForgotPasswordFormData {
  email: string;
  verificationCode: string;
  newPassword: string;
}
