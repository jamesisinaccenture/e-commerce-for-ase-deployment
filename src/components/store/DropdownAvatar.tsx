import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";

import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/endpoints";
import { getUserSession } from "@/lib/utils";
import { useAuthStore } from "@/hooks/state/useAuth";

const DropdownAvatar = () => {
  const { isAuth } = useAuthStore();
  const session = getUserSession();

  return (
    <>
      {session && isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center hover:cursor-pointer">
              <Avatar>
                <AvatarImage src={session.user?.data?.avatar} />
                <AvatarFallback>
                  {session.user?.data?.first_name?.charAt(0)}
                </AvatarFallback>
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
              <Link
                to="/logout"
                className="flex w-full items-center justify-between">
                <span>Logout</span>
                <LogOut size={16} color="black" />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Link
            to={ROUTES.LOGIN}
            className="flex items-center gap-2 hover:cursor-pointer">
            <User size={20} color="#008ECC" />
            <h4 className="text-sm hidden md:inline-block md:text-lg font-semibold ">
              Sign Up
            </h4>
          </Link>
        </>
      )}
    </>
  );
};

export default DropdownAvatar;
