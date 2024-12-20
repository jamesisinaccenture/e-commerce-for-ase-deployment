import { HTMLInputTypeAttribute } from 'react';

// Define the shape of the states here, remember to export them
export interface CountInterface {
    count: number;
    increaseCount: () => void;
    removeCount: () => void;
}

// Define the shape of the states here, remember to export them
export interface ICustomInput {
    ref: React.RefObject<HTMLInputElement>;

    isSearch?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
    label?: string;
    name?: string;
    checked?: boolean;
    type?: HTMLInputTypeAttribute;
    isRequired?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    disabled?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    className?: any;
}

// Products interface
export interface IProduct {
    product_id?: string | undefined;
    product_name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    product_img?: any;
    product_description: string | undefined;
    category?: string[] | null | undefined;
    price: number;
    currency: string;
    sold?: number;
    date_created?: string;
    created_by?: string;
    discount?: number;
    variants?: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    other_details: any;
}

export interface IProductSection {
    products: IProduct[];
    isHome?: boolean;
}

export interface IProductStore {
    products: IProduct[];
    setProducts: (products: IProduct[]) => void;
}

export interface IProductResponse {
    data: {
        products: IProduct[];
    };
}

/*Used in the footer only*/
export interface ContactInfoProps {
    icon: React.ReactNode;
    label: string;
    contact: string;
}

export interface FooterSectionProps {
    title: string;
    items: string[];
}

export interface EndFooterSectionProps {
    version: string;
}
/*End of footer props*/

export interface DropdownAvatarProps {
    handleLogout: () => void;
}

export interface CartItem {
    product_id: string;
    product_name: string;
    product_img: string;
    description: string;
    quantity: number;
    price: number;
}

export interface CartState {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (product_id: string) => void;
    increaseQuantity: (product_id: string) => void;
    decreaseQuantity: (product_id: string) => void;
    removeAll: () => void;
}

export interface ICart {
    message: string;
    user_id: string;
    cart: [
        {
            cart_id: 'string';
            items: [
                {
                    product_name: string;
                    quantity: number;
                    total_price: 0;
                    currency: string;
                },
            ];
            created_at: string;
        },
    ];
}

export interface ICheckoutStore {
    isLoading: boolean;
    isCheckoutCartOpen: boolean;
    shippingAddresses: ICheckoutShippingAddress[];
    shippingAddressInput: {
        id: string;
        full_name: string;
        lot_house_apt: string;
        street: string;
        barangay: string;
        city: string;
        contact_number: string;
    };
    setShippingAddresses: (
        shippingAddresses: ICheckoutShippingAddress[],
    ) => void;
    setShippingAddressInput: (
        shippingAddressInput: ICheckoutShippingAddress,
    ) => void;
    toggleCheckoutCart: () => void;
}

export interface ICheckoutShippingAddress {
    id: string;
    full_name: string;
    lot_house_apt: string;
    street: string;
    barangay: string;
    city: string;
    contact_number: string;
}
