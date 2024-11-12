/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";

import Loader from "@/components/reusable/Loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useProductStore } from "@/hooks/state/useProduct";

const StoreProductsPage = () => {
  // const productStore = useProductStore();
  // const { response, loading, error } = useAxios({
  //   url: "/photos?_limit=20",
  //   method: "GET",
  // });

  // const fetchProducts = () => {
  //   productStore.setProducts(response);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, [response]);
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {productStore.products?.map((product) => (
            <Card
              key={product.id}
              className="shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
              <CardHeader>
                <img
                  src={product.thumbnailUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">
                  Album ID: {product.albumId}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )} */}
    </>
  );
};

export default StoreProductsPage;
