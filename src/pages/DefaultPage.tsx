import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <h1>Welcome, Please proceed to either one</h1>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-500"
          >
            <Link to={"admin"}>Admin Page</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-500"
          >
            <Link to={"store"}>Store Page</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DefaultPage;
