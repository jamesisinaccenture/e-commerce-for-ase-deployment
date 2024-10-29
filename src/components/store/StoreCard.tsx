import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Make sure to import your button component
import { useCount } from "@/hooks/state/useCount";

const StoreCard = () => {
  const count = useCount((state) => state.count);
  const increaseCount = useCount((state) => state.increaseCount);

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 p-6">
          <CardTitle className="text-white text-2xl font-bold">
            Welcome to Our Store
          </CardTitle>
          <CardDescription className="text-white mt-2">
            This is the Store's Landing Page, where amazing things happen!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 text-lg mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            quasi culpa eum iste cum consequuntur voluptates et. Nisi sint
            deleniti alias molestiae eum? Minus mollitia adipisci incidunt
            excepturi non blanditiis iure recusandae quo, at placeat.
          </p>
          <Button
            className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 p-6"
            onClick={increaseCount}
          >
            Shop Now ({count})
          </Button>
        </CardContent>
        <CardFooter className="bg-gray-200 p-4">
          <p className="text-gray-600">
            © 2024 E-Commerce. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StoreCard;
