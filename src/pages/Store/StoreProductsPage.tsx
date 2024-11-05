import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button"; // Assuming there's a Button component
import useAxios from "@/hooks/useAxios";
import { useProductStore } from "@/hooks/state/useProduct";

// Adjust the import based on your component structure

const StoreProductsPage = () => {
  const productStore = useProductStore();

  const { response } = useAxios({
    url: "/photos?_limit=10", // URL relative to the base URL
    method: "GET", // HTTP method
    body: null, // Body can be null for GET requests
    headers: null, // Headers can be null if not needed
  }); // you can also retrieve the isLoading, error from the useAxios hook

  if (response) {
    productStore.setProducts(response.data);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {productStore.products?.map((product) => (
        <Card
          key={product.id}
          className="shadow-lg transition-transform transform hover:scale-105">
          <CardHeader>
            <img
              src={product.thumbnailUrl}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-md"
            />
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">Album ID: {product.albumId}</p>
          </CardContent>
          <CardFooter>
            <Button variant="default">View Details</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default StoreProductsPage;
