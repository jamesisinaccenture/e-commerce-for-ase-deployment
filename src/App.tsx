import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import CustomLoader from "./components/reusable/CustomLoader";
import { Toaster } from "@/components/ui/toaster";

import { router } from "./routes";

const App = () => {
  return (
    <Suspense fallback={<CustomLoader />}>
      <div className="App h-full">
        <Toaster />
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
};

export default App;
