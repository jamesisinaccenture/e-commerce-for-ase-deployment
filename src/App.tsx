import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

const App = () => {
  const location = useLocation();

  // Define the paths where you do not want the admin sidebar
  const hideSidebarPaths = ["/store"]; // Add other paths here

  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);

  return (
    <div className="App">
      <SidebarProvider>
        {/* Render the sidebar only if the current path is not in hideSidebarPaths */}
        {!shouldHideSidebar && <AppSidebar />}
        {!shouldHideSidebar && <SidebarTrigger />}
        <main className="w-full h-full">
          <Outlet />{" "}
          {/* This will render the matching child route in the main.jsx file,
           this will handle the routing for you guys just add the proper routes XD */}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default App;
