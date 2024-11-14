import {
  Calendar,
  Inbox,
  LayoutDashboardIcon,
  LogOut,
  ShoppingBasket,
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/hooks/state/useAuth";
import { toast } from "@/hooks/use-toast";
import { ROUTES } from "@/routes/endpoints";
import { logoutService } from "@/services/authService";

export function AppSidebar() {
  const navigate = useNavigate();
  const { logout, isLoading, setLoading } = useAuthStore();
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
    {
      type: "button",
      title: "Logout",
      onClick: handleLogout,
      icon: LogOut,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>E-Commerce Store</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.type === "link" ? (
                    <SidebarMenuButton asChild>
                      <Link to={item.url || "/"}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton onClick={item.onClick}>
                      <item.icon />
                      <span>{item.title}</span>
                      {isLoading && <Loader size="small" />}
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
