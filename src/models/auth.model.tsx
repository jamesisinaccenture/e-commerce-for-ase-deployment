/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IRoutes {
  component: React.ComponentType<any> | React.ReactNode | any;
  [key: string]: any;
}

export interface IAuthStore {
  isAdmin: boolean;
  isAuth: boolean;
}


export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}