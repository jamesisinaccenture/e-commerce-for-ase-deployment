/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IRoutes {
  component: React.ComponentType<any> | React.ReactNode | any;
  [key: string]: any;
}

export interface IAuthStore {
  isLoading: boolean;
  isAdmin: boolean;
  isAuth: boolean;
  login: (isAdmin: boolean, isAuth: boolean) => void;
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
  email: string;
  phoneNumber?: string;
  address: string;
  username: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  dateCreated: string;
}
