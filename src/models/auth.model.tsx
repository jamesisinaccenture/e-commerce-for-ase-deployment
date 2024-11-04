export interface IRoutes {
  component: React.ComponentType<any> | React.ReactNode | any;
  [key: string]: any;
}

export interface IAuthStore {
  isAdmin: boolean;
  isAuth: boolean;
}
