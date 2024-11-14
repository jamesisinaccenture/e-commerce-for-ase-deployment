import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/hooks/state/useAuth";
import { getUserSession } from "@/lib/utils";
import { DropdownAvatarProps } from "@/models/store.model";
import { ROUTES } from "@/routes/endpoints";

const DropdownAvatar = ({ handleLogout }: DropdownAvatarProps) => {
  const { isAuth } = useAuthStore();
  const session = getUserSession();

  return (
    <>
      {session && isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center hover:cursor-pointer">
              <Avatar>
                <AvatarImage src={session.img} />
                <AvatarFallback>{session.first_name?.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
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
              <div
                className="flex w-full items-center justify-between"
                onClick={handleLogout}
              >
                <span>Logout</span>
                <LogOut size={16} color="black" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Link
            to={ROUTES.LOGIN}
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <User size={20} color="#008ECC" />
            <Link to={ROUTES.REGISTER}>
              <h4 className="text-sm hidden md:inline-block md:text-lg font-semibold ">
                Sign Up
              </h4>
            </Link>
            <span className="hidden md:block text-muted-foreground">|</span>
            <Link to={ROUTES.LOGIN}>
              <h4 className="text-sm hidden md:inline-block md:text-lg font-semibold ">
                Sign In
              </h4>
            </Link>
          </Link>
        </>
      )}
    </>
  );
};

export default DropdownAvatar;
