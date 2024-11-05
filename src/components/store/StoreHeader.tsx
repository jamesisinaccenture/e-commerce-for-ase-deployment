import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import CartDrawer from "@/components/store/CartDrawer";
import DropdownAvatar from "@/components/store/DropdownAvatar";
import Navbar from "@/components/store/Navbar";

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
      <Navbar />

      {/* Right side of the navigation bar */}
      <div className="flex items-center space-x-4">
        <Input
          type="search"
          placeholder="Search"
          className="hidden md:block w-64" // Show on larger screens only
        />

        {/* This will pull out the cart drawer */}
        <CartDrawer />

        {/* TThis is for the avatar that has a dropdown */}
        <DropdownAvatar />
      </div>
    </header>
  );
};

export default StoreHeader;
