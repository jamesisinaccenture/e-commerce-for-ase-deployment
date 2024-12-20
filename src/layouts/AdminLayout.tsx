import { Outlet } from "react-router-dom";

import { UserDropdown } from "@/components/admin/UserDropdown";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <div className="p-2 border-b flex justify-between items-center">
          <SidebarTrigger />
          <UserDropdown />
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[1100px] max-h-[calc(100vh-53px)] overflow-auto max-sm:w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
