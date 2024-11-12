import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { router } from "./routes";

const App = () => {
  return (
    <div className="App">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
