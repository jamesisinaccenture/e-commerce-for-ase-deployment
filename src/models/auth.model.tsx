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
  id: string;
  first_name: string;
  last_name: string;
  address: string;
  contact_number: string;
  username: string;
  // email: string;
  date_created: string;
  // old_password?: string;
  // new_password?: string;
  // confirm_new_password?: string;
}

export interface UpdateInformationFormDataForStore {
  data: UpdateInformationFormData;
  setData: (data: UpdateInformationFormData) => void;
}
