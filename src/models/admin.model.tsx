
// Products interface
export interface IProduct {
  product_id: string | undefined;
  product_name: string;
  product_img?: any;
  product_description: string | undefined;
  category: string | null | undefined;
  price: number;
  currency: string;
  sold?: number;
  date_created?: string;
  created_by?: string;
}
export interface IProductResponse {
  data: {
    products: IProduct[];
  };
}

// Categories interface
export interface ICategory {
  category_id?: string;
  category_name: string;
  category_img?: string;
  date_created?: string;
  create_by?: string;
}

export interface ICategoryResponse {
  data: ICategory[];
}

//delete
export interface ICreateCategoryResponse {
  data: {
    message: string;
    category: ICategory[];
  };
}

export interface IUpdateCategoryResponse {
  data: {
    message: "Category updated successfully";
    category: ICategory[];
  };
}

export interface ICreateCategoryPayload {
  category_id?: any;
  category_name: string;
}

export interface IDeleteCategoryPayload {}

export interface IUpdateCategoryPayload {
  category_id?: string;
  category_name: string;
  created_by?: string;
}

// User interface
export interface IUser {
  user_id?: string;
  user_img: string | File;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  contact_number: string;
  address: string;
  access_level: string;
  position?: string | null;
  branch?: string | null;
  department?: string | null;
  date_created?: string;
  status?: string;
}

export interface IUserResponse {
  data: {
    users: IUser[];
  };
}
export interface ICreateUserResponse {
  data: {
    message: string;
    user: IUser[];
  };
}
export interface ICreateUserPayload {
  first_name: string;
  last_name: string;
  contact_number: string;
  address: string;
  username: string;
  password: string;
  access_level: string;
  user_img: string;
  position: string;
  department: string;
  branch: string;
  status: string;
}
export interface IUpdateUserResponse {
  data: {
    message: "User updated successfully";
    user: IUser[];
  };
}
export interface IUpdateUserPayload {
  first_name: string;
  last_name: string;
  contact_number: string;
  address: string;
  username?: string;
  password?: string;
  access_level: string;
  user_img?: string | File | undefined;
  position?: string;
  department?: string;
  branch?: string;
  user_id: string;
  status?: string;
}

export interface IDeleteUserPayload {}

// store state interfaces
export interface IAdminProductStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  clearProducts: () => void;
}

export interface IAdminCategoryStore {
  category: ICategory[];
  setCategory: (category: ICategory[]) => void;
  clearCategory: () => void;
}

export interface IAdminUserStore {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
  clearUsers: () => void;
}

export interface IAdminGeneralStore {
  open: boolean;
  setOpen: (open: boolean) => void;

  search: string;
  setSearch: (search: string) => void;
}

// Generals interface
export interface IDropImageInput {
  onImageDrop?: (file: File) => void;
  value?: string;
}
