import {
  Calendar,
  ShoppingBasket,
  Inbox,
  User2Icon,
  LayoutDashboardIcon,
} from "lucide-react";

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
import { ROUTES } from "@/routes/endpoints";
import { Link } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: ROUTES.ADMIN.DASHBOARD,
    icon: LayoutDashboardIcon,
  },
  {
    title: "Products",
    url: ROUTES.ADMIN.PRODUCT,
    icon: ShoppingBasket,
  },
  {
    title: "Category",
    url: ROUTES.ADMIN.CATEGORY,
    icon: Calendar,
  },
  {
    title: "Users",
    url: ROUTES.ADMIN.USERS,
    icon: User2Icon,
  },
  {
    title: "Transactions",
    url: ROUTES.ADMIN.TRANSACTIONS,
    icon: Inbox,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>E-Commerce Store</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
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
