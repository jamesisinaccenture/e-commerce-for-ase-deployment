import { User2 } from "lucide-react";
import { Outlet } from "react-router-dom";

import { UserDropdown } from "@/components/admin/UserDropdown";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <div className="p-2 border-b flex justify-between items-center">
          <SidebarTrigger />
          <div>
            <UserDropdown />
          </div>
        </div>
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
