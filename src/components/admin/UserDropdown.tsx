"use client";
import { User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/hooks/state/useAuth";
import { toast } from "@/hooks/use-toast";
import { getUserSession } from "@/lib/utils";
import { ROUTES } from "@/routes/endpoints";
import { logoutService } from "@/services/auth/authService";
import Loader from "../reusable/Loader";

export function UserDropdown() {
  const user = getUserSession();
  const navigate = useNavigate();

  const { logout, isLoading, setLoading } = useAuthStore();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await logoutService();

      if (response) {
        toast({
          variant: "success",
          title: "Logout successful!",
          description: "You will be redirected in a few seconds.",
        });

        navigate(ROUTES.BASE);

        logout();

        setLoading(false);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Logout failed",
        description: `Something went wrong. ${error}`,
      });
      console.error("Logout failed", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <User2 /> {user?.username}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div className="flex gap-2 p-1 items-center">
          <User2 className="mx-2" />
          <div className="w-full">
            <DropdownMenuLabel className="font-normal text-sm py-0">
              Welcome!
            </DropdownMenuLabel>
            <DropdownMenuLabel className="truncate">
              {user?.first_name} {user?.last_name}
            </DropdownMenuLabel>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center my-2">
            <Link
              to={`#`}
              className="px-4 py-2 rounded-full border border-black hover:bg-gray-200 text-sm font-medium"
            >
              <p>Account Settings</p>
            </Link>
          </div>
          <DropdownMenuSeparator />
          <Button
            onClick={handleLogout}
            className="w-full hover:bg-red-500/90 text-left hover:text-white"
            variant="ghost"
            disabled={isLoading}
          >
            Logout
            {isLoading && <Loader size="small" />}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
