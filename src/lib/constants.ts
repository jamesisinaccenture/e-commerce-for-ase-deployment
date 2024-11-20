import { IUser } from "@/models/admin.model";
import { IProductData } from "@/models/store.model";

export const API_URL = import.meta.env.VITE_BACKEND_API_URL_ENDPOINT;

export const store_products: IProductData[] = [
  {
    product_id: "P001",
    product_name: "Wireless Earbuds",
    product_img: "src/assets/images/wireless airpods.jpg",
    product_description:
      "High-quality wireless earbuds with noise cancellation.",
    category: "Electronics",
    price: 59.99,
    currency: "USD",
    sold: 120,
    date_created: "2024-01-15",
    created_by: "JohnDoe",
  },
  {
    product_id: "P002",
    product_name: "Gaming Laptop",
    product_img: "src/assets/images/gaming laptop.jpg",
    product_description: "Powerful laptop for gaming with RGB keyboard.",
    category: "Computers",
    price: 1299.99,
    currency: "USD",
    sold: 45,
    date_created: "2024-02-20",
    created_by: "JaneSmith",
  },
  {
    product_id: "P003",
    product_name: "Smart Watch",
    product_img: "src/assets/images/Smart Watch.webp",
    product_description:
      "Water-resistant smartwatch with health tracking features.",
    category: "Wearables",
    price: 199.99,
    currency: "USD",
    sold: 350,
    date_created: "2024-03-01",
    created_by: "EmilyBrown",
  },
  {
    product_id: "P004",
    product_name: "Electric Toothbrush",
    product_img: "src/assets/images/Electric Toothbrush.jpg",
    product_description:
      "Rechargeable toothbrush with multiple cleaning modes.",
    category: "Personal Care",
    price: 49.99,
    currency: "USD",
    sold: 230,
    date_created: "2024-03-15",
    created_by: "ChrisJohnson",
  },
  {
    product_id: "P005",
    product_name: "4K TV",
    product_img: "src/assets/images/4K TV.webp",
    product_description: "55-inch smart 4K Ultra HD TV with HDR support.",
    category: "Home Entertainment",
    price: 599.99,
    currency: "USD",
    sold: 110,
    date_created: "2024-04-05",
    created_by: "AlexLee",
  },
  {
    product_id: "P006",
    product_name: "Portable Bluetooth Speaker",
    product_img: "src/assets/images/Portable Bluetooth Speaker.jpg",
    product_description: "Waterproof portable speaker with deep bass.",
    category: "Audio",
    price: 39.99,
    currency: "USD",
    sold: 275,
    date_created: "2024-04-10",
    created_by: "SophiaDavis",
  },
  {
    product_id: "P007",
    product_name: "Digital Camera",
    product_img: "src/assets/images/Digital Camera.jpg",
    product_description: "Compact digital camera with 20x zoom.",
    category: "Photography",
    price: 349.99,
    currency: "USD",
    sold: 60,
    date_created: "2024-04-22",
    created_by: "LiamMartinez",
  },
  {
    product_id: "P008",
    product_name: "Smartphone Tripod",
    product_img: "src/assets/images/Smartphone Tripod.jpg",
    product_description: "Lightweight and adjustable tripod for smartphones.",
    category: "Photography",
    price: 24.99,
    currency: "USD",
    sold: 410,
    date_created: "2024-05-01",
    created_by: "OliviaGarcia",
  },
  {
    product_id: "P009",
    product_name: "Electric Kettle",
    product_img: "src/assets/images/Electric Kettle.jpg",
    product_description: "Stainless steel kettle with rapid boiling feature.",
    category: "Kitchen Appliances",
    price: 29.99,
    currency: "USD",
    sold: 185,
    date_created: "2024-05-10",
    created_by: "MasonWilson",
  },
  {
    product_id: "P010",
    product_name: "Desk Lamp",
    product_img: "src/assets/images/Desk Lamp.jpg",
    product_description:
      "LED desk lamp with adjustable brightness and USB port.",
    category: "Home Decor",
    price: 19.99,
    currency: "USD",
    sold: 350,
    date_created: "2024-05-20",
    created_by: "EmmaClark",
  },
  {
    product_id: "P011",
    product_name: "Yoga Mat",
    product_img: "src/assets/images/Yoga Mat.webp",
    product_description: "Non-slip yoga mat with excellent cushioning.",
    category: "Fitness",
    price: 14.99,
    currency: "USD",
    sold: 560,
    date_created: "2024-06-01",
    created_by: "AidenWhite",
  },
  {
    product_id: "P012",
    product_name: "Air Purifier",
    product_img: "src/assets/images/Air Purifier.jpg",
    product_description: "HEPA filter air purifier for home use.",
    category: "Home Appliances",
    price: 129.99,
    currency: "USD",
    sold: 85,
    date_created: "2024-06-12",
    created_by: "EllaThomas",
  },
  {
    product_id: "P013",
    product_name: "Coffee Maker",
    product_img: "src/assets/images/Coffee Maker.jpg",
    product_description: "Single-serve coffee maker with fast brew technology.",
    category: "Kitchen Appliances",
    price: 89.99,
    currency: "USD",
    sold: 140,
    date_created: "2024-06-25",
    created_by: "JacobRobinson",
  },
  {
    product_id: "P014",
    product_name: "Tablet",
    product_img: "src/assets/images/Tablet.jpg",
    product_description: "10-inch tablet with 128GB storage and HD display.",
    category: "Electronics",
    price: 249.99,
    currency: "USD",
    sold: 95,
    date_created: "2024-07-05",
    created_by: "MiaWalker",
  },
  {
    product_id: "P015",
    product_name: "Smart Thermostat",
    product_img: "src/assets/images/Smart Thermostat.jpg",
    product_description: "Smart thermostat with voice control compatibility.",
    category: "Home Automation",
    price: 179.99,
    currency: "USD",
    sold: 70,
    date_created: "2024-07-10",
    created_by: "JamesAllen",
  },
];

//delete this later when categories API fetching is established
export const categories = [
  "Mobile",
  "Cosmetics",
  "Watches",
  "Furniture",
  "Photography",
  "Kitchen Appliance",
  "Home Decor",
  "Fitness",
  "Home Appliance",
  "Electronics",
  "Home Automation",
];

export const services = [
  "About Us",
  "Terms & Conditions",
  "Contact Us",
  "FAQs",
  "Privacy Policy",
  "E-waste Policy",
  "Cancellation & Return Policy",
];

export const user = {
  user_id: "5177192a-997f-407f-85e8-d32b95e0ff8e",
  first_name: "Joel",
  last_name: "Malupiton",
  contact_number: "09232321231",
  address: "96 Etivac St, Sampaloc Cavite, 1191, Philippines",
  date_created: "2024-11-11T08:56:05.937",
  username: "boss!?ikawnanamanyan",
  access_level: "user",
  user_img: null,
  position: null,
  department: null,
  branch: null,
  group_tag: "group2-malakas",
};

export const usersList: IUser[] = [
  {
    user_id: "5177192a-997f-407f-85e8-d32b95e0ff8e",
    first_name: "Joel",
    last_name: "Malupiton",
    contact_number: "09232321231",
    address: "96 Etivac St, Sampaloc Cavite, 1191, Philippines",
    date_created: "2024-11-11T08:56:05.937",
    username: "boss!?ikawnanamanyan",
    access_level: "user",
    user_img: null,
    position: null,
    department: null,
    branch: null,
    group_tag: "group2-malakas",
  },
];

export const categoryList = [
  {
    category_id: "C001",
    category_name: "Electronics",
    category_img: "https://example.com/images/electronics.jpg",
    date_created: "2024-01-05",
    created_by: "JohnDoe",
  },
  {
    category_id: "C002",
    category_name: "Computers",
    category_img: "https://example.com/images/computers.jpg",
    date_created: "2024-01-15",
    created_by: "JaneSmith",
  },
  {
    category_id: "C003",
    category_name: "Wearables",
    category_img: "https://example.com/images/wearables.jpg",
    date_created: "2024-02-01",
    created_by: "EmilyBrown",
  },
  {
    category_id: "C004",
    category_name: "Personal Care",
    category_img: "https://example.com/images/personal-care.jpg",
    date_created: "2024-02-20",
    created_by: "ChrisJohnson",
  },
  {
    category_id: "C005",
    category_name: "Home Entertainment",
    category_img: "https://example.com/images/home-entertainment.jpg",
    date_created: "2024-03-10",
    created_by: "AlexLee",
  },
  {
    category_id: "C006",
    category_name: "Audio",
    category_img: "https://example.com/images/audio.jpg",
    date_created: "2024-03-25",
    created_by: "SophiaDavis",
  },
  {
    category_id: "C007",
    category_name: "Photography",
    category_img: "https://example.com/images/photography.jpg",
    date_created: "2024-04-05",
    created_by: "LiamMartinez",
  },
  {
    category_id: "C008",
    category_name: "Kitchen Appliances",
    category_img: "https://example.com/images/kitchen-appliances.jpg",
    date_created: "2024-04-20",
    created_by: "OliviaGarcia",
  },
  {
    category_id: "C009",
    category_name: "Home Decor",
    category_img: "https://example.com/images/home-decor.jpg",
    date_created: "2024-05-01",
    created_by: "MasonWilson",
  },
  {
    category_id: "C010",
    category_name: "Fitness",
    category_img: "https://example.com/images/fitness.jpg",
    date_created: "2024-05-15",
    created_by: "EmmaClark",
  },
];
