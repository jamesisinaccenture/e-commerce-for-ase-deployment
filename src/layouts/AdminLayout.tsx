import { User2 } from "lucide-react";
import { Outlet } from "react-router-dom";

import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <div className="p-2 bg-gray-300 flex justify-between items-center">
          <SidebarTrigger />
          <div>
            <Button className="bg-transparent rounded-full w-10 h-10">
              <User2 />
            </Button>
          </div>
        </div>
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
