import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DropdownAvatar = () => {
  return (
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
  );
};

export default DropdownAvatar;
