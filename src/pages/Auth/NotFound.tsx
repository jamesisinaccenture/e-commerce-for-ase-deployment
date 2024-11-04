import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <img src="/404.jpg" alt="Not Found" width={300} height={300} />
      <Button variant="secondary" className="hover:text-red-800" asChild>
        <Link to="/">Go Back Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
