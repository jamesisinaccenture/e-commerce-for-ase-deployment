import {
  Calendar,
  ChevronsUpDown,
  GlobeLockIcon,
  Inbox,
  LayoutDashboardIcon,
  LogOut,
  Plus,
  ShoppingBasket,
  User,
  User2Icon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Loader from "@/components/reusable/Loader";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/hooks/state/useAuth";
import { toast } from "@/hooks/use-toast";
import { getUserSession } from "@/lib/utils";
import { ROUTES } from "@/routes/endpoints";
import { logoutService } from "@/services/authService";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuShortcut } from "./ui/dropdown-menu";

export function AppSidebar() {
  const navigate = useNavigate();
  const { logout, isLoading, setLoading } = useAuthStore();
  const user = getUserSession();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await logoutService();

      if (response) {
        localStorage.removeItem("session");
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

  // Menu items
  const items = [
    {
      type: "link",
      title: "Dashboard",
      url: ROUTES.ADMIN.DASHBOARD,
      icon: LayoutDashboardIcon,
    },
    {
      type: "link",
      title: "Products",
      url: ROUTES.ADMIN.PRODUCT,
      icon: ShoppingBasket,
    },
    {
      type: "link",
      title: "Category",
      url: ROUTES.ADMIN.CATEGORY,
      icon: Calendar,
    },
    {
      type: "link",
      title: "Users",
      url: ROUTES.ADMIN.USERS,
      icon: User2Icon,
    },
    {
      type: "link",
      title: "Transactions",
      url: ROUTES.ADMIN.TRANSACTIONS,
      icon: Inbox,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 h-fit flex flex-row items-center">
        <SidebarMenu>
          <SidebarMenuItem className="">
            <DropdownMenu>
              <SidebarMenuButton size="lg" className="cursor-default">
                <div className="flex bg-black p-2 aspect-square items-center justify-center rounded-lg text-white">
                  <GlobeLockIcon className="stroke-white bg-black" size={15} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Mobile Center Admin
                  </span>
                </div>
              </SidebarMenuButton>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup className="px-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="hover:bg-black hover:text-admin-text-secondary p-4 rounded-lg"
                    asChild
                  >
                    <Link
                      to={item.url || "/"}
                      className="flex gap-2 items-center h-fit"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
