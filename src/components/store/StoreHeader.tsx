import { BadgePercent, MapPinned, Search, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

// import apple from "@/assets/images/apple-logo.png";
import logo from "@/assets/images/logo.png";
import Loader from "@/components/reusable/Loader";
import CartDrawer from "@/components/store/CartDrawer";
import DropdownAvatar from "@/components/store/DropdownAvatar";
// import Navbar from "@/components/store/Navbar";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/hooks/state/useAuth";
import { toast } from "@/hooks/use-toast";
import { getUserSession } from "@/lib/utils";
import { ROUTES } from "@/routes/endpoints";
import { logoutService } from "@/services/authService";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const StoreHeader = () => {
  const { logout, isLoading, setLoading } = useAuthStore();
  const session = getUserSession();
  const navigate = useNavigate();
  console.log("session", session);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await logoutService();

      if (response) {
        sessionStorage.removeItem("session");
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
    <header className="flex flex-col">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Top Most Section */}
          <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-2 shadow-md bg-[#f5f5f5]">
            <span className="text-xs font-regular mb-2 md:mb-0">
              Welcome to worldwide Megamart!
            </span>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center gap-2">
                <MapPinned size={16} color="#008ECC" />
                <span className="text-xs font-regular">
                  Deliver to <strong>423651</strong>
                </span>
              </div>

              <span className="hidden md:block text-muted-foreground">|</span>

              <div className="flex items-center gap-2">
                <Truck size={16} color="#008ECC" />
                <span className="text-xs font-regular">Track your order</span>
              </div>

              <span className="hidden md:block text-muted-foreground">|</span>

              <div className="flex items-center gap-2">
                <BadgePercent size={16} color="#008ECC" />
                <span className="text-xs font-regular">All Offers</span>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-row items-start justify-between px-4 md:items-center md:px-6 py-2 shadow-md space-y-2 md:space-y-0">
            {/* Logo Section */}
            <div className="flex flex-row items-center gap-2">
              <div className="w-6 h-6 md:w-12 md:h-12">
                <Avatar>
                  <AvatarImage src={logo} alt="Logo" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
              </div>
              <h1 className="text-sm md:text-3xl font-bold text-[#008ECC]">
                Mobile Center
              </h1>
            </div>

            {/* Search and Cart Section */}
            <div className="flex flex-row items-center gap-4 justify-end w-full md:w-auto ">
              <Input
                type="search"
                icon={<Search size={20} color="#008ECC" />}
                isSearch
                placeholder="Search mobile, accessories, and more..."
                className="w-2/3 md:w-96" // Full width on mobile, fixed width on larger screens
              />
              <DropdownAvatar handleLogout={handleLogout} />

              <span className="hidden md:block text-muted-foreground">|</span>
              <CartDrawer />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default StoreHeader;
