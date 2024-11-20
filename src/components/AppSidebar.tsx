import {
  Calendar,
  GlobeLockIcon,
  Inbox,
  LayoutDashboardIcon,
  ShoppingBasket,
  User2Icon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/routes/endpoints";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

export function AppSidebar() {
  const location = useLocation();

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
      <SidebarHeader className="p-4 bg-white h-fit flex flex-row items-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <SidebarMenuButton size="lg" className="cursor-default">
                <div className="flex bg-black p-2 aspect-square items-center justify-center rounded-lg text-white">
                  <GlobeLockIcon className="stroke-white" size={15} />
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
                  {/* <SidebarMenuButton className="w-full h-fit p-0">
                    <Link
                      to={
                        location.pathname === item.url ? "#" : item.url || "/"
                      }
                      className={`${
                        location.pathname === item.url
                          ? "bg-black text-admin-text-secondary hover:bg-black hover:text-admin-text-secondary cursor-default"
                          : "hover:bg-black hover:text-admin-text-secondary cursor-pointer"
                      } p-4 rounded-lg flex gap-2 items-center w-full transition-all`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton> */}

                  <SidebarMenuButton
                    className={`${
                      location.pathname === item.url
                        ? "bg-black text-admin-text-secondary hover:bg-black hover:text-admin-text-secondary cursor-default"
                        : "hover:bg-black hover:text-admin-text-secondary cursor-pointer"
                    } p-0 rounded-lg flex gap-2 items-center w-full transition-all h-fit`}
                    asChild={item.url === location.pathname}
                    disabled={item.url === location.pathname}
                  >
                    <Link
                      to={
                        location.pathname === item.url ? "#" : item.url || "/"
                      }
                      className={`p-4 rounded-lg flex gap-2 items-center w-full transition-all`}
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
