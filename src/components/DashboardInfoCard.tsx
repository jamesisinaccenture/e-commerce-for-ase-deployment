import { Box, History, Scale, TrendingUp, Users } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const DashboardInfoCard = () => {
  return (
    <div className="flex gap-3 justify-between mb-5">
      <Card className="w-full">
        <CardHeader className="pb-2">
          <p className="text-sm text-muted-foreground">Total User</p>
        </CardHeader>
        <CardContent className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-3xl font-bold">1162</p>
            <div className="flex items-center text-xs md:text-sm text-emerald-500 font-medium">
              <TrendingUp className="h-4 w-4 mr-1" />
              8.5% Up from yesterday
            </div>
          </div>
          <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
            <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader className="pb-2">
          <p className="text-sm text-muted-foreground">Total Order</p>
        </CardHeader>
        <CardContent className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-3xl font-bold">10293</p>
            <div className="flex items-center text-xs md:text-sm text-emerald-500 font-medium">
              <TrendingUp className="h-4 w-4 mr-1" />
              1.3% Up from past week
            </div>
          </div>
          <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
            <Box className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader className="pb-2">
          <p className="text-sm text-muted-foreground">Total Sales</p>
        </CardHeader>
        <CardContent className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-3xl font-bold">₱10,021</p>
            <div className="flex items-center text-xs md:text-sm text-emerald-500 font-medium">
              <TrendingUp className="h-4 w-4 mr-1" />
              1.5% Up from yesterday
            </div>
          </div>
          <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
            <Scale className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader className="pb-2">
          <p className="text-sm text-muted-foreground">Total Pending</p>
        </CardHeader>
        <CardContent className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-3xl font-bold">2040</p>
            <div className="flex items-center text-xs md:text-sm text-emerald-500 font-medium">
              <TrendingUp className="h-4 w-4 mr-1" />
              1.8% Up from yesterday
            </div>
          </div>
          <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
            <History className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardInfoCard;
