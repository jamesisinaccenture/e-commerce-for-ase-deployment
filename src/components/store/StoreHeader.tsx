import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { LogOut, ShoppingCart } from "lucide-react";
import CartDrawer from "./CartDrawer";

const products = [
  {
    title: "iPhone 16 Pro Max",
    description: "Get the latest iPhone 16 Pro Max.",
    image: "/iphone.png",
    href: "/",
  },
  {
    title: "Greatest Phone now in Titanium",
    description: "Get the new iPhone 15.",
    image: "/iphone15.png",
    href: "/",
  },
  // Add more items as needed
];

const StoreHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/apple-logo.png" alt="apple" />
          <AvatarFallback>Apple</AvatarFallback>
        </Avatar>
        <span className="text-xl font-semibold">iStore</span>{" "}
      </div>

      {/* This is what we see dun sa very middle nung header, this is the actual navigational bar */}
      <NavigationMenu className="flex-1 justify-center">
        <NavigationMenuList className="flex space-x-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Latest News</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] items-center">
                {products.map((product, index) => (
                  <li key={index} className="row-span-1">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-cover bg-center bg-gradient-to-b from-violet-400 to-blue-400 p-6 no-underline outline-none focus:shadow-md"
                        href={product.href}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          {product.title}
                        </div>
                        <p className="text-sm leading-tight text-gray-200">
                          {product.description}
                        </p>
                        <img
                          className="object-contain mt-2"
                          src={product.image}
                          alt={product.title}
                          width={150}
                          height={150}
                        />
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Shops</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {/* Add list items for components here */}
                <h1>Put your ads here.</h1>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/*Second part of the navigation bar */}
        <NavigationMenuList className="flex ml-6 space-x-8">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/all-products"
              className="flex items-center justify-center hover:underline"
            >
              All Products
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/category"
              className="flex items-center justify-center hover:underline"
            >
              Category
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/*Third part of the navigation bar with cart animations, we need to separate the one with animation so it would not hinder the others*/}
        <NavigationMenuList className="flex ml-5 space-x-8">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/cart"
              className="flex flex-row items-center gap-3 hover:underline transition-colors duration-300 group"
            >
              <ShoppingCart
                size={16}
                color="black"
                className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              />
              <span className="flex items-center gap-2 transition-transform duration-300 group-hover:underline">
                <span>
                  <div className="relative">
                    Cart
                    <p className="absolute -top-1 -right-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      2
                    </p>
                  </div>
                </span>
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right side of the navigation bar */}
      <div className="flex items-center space-x-4">
        <Input
          type="search"
          placeholder="Search"
          className="hidden md:block w-64" // Show on larger screens only
        />

        <CartDrawer />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="hover:cursor-pointer">
              <Link to="/profile">
                <AvatarImage src="/avatar.jpg" alt="avatar" />
                <AvatarFallback>AV</AvatarFallback>
              </Link>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="bottom" sideOffset={8}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Team
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Subscription
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:cursor-pointer">
              <Link
                to="/logout"
                className="flex w-full items-center justify-between"
              >
                <span>Logout</span>
                <LogOut size={16} color="black" />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default StoreHeader;
