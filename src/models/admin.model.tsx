
// Products interface
export interface IProduct {
    product_id: string | undefined;
    product_name: string;
    product_img?: any;
    product_description: string | undefined;
    category: ICategory[] | null | undefined;
    price: number;
    currency: string;
    sold?: number;
    date_created?: string;
    created_by?: string;
    other_details?: string | null;
    status?: string;
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
    status: string;
}

export interface ICategoryResponse {
    data: { categories: ICategory[] };
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
        message: 'Category updated successfully';
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
export interface CustomComboBoxProps {
    options: Option[];
    onChange?: (selectedItems: string[]) => void;
    selectedOptions?: string[];
}

export interface Option {
    value: string;
    label: string;
}
