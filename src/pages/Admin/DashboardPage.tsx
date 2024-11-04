import PieChartCard from "@/components/PieChartCard";
import AdminLayout from "@/layouts/AdminLayout";

const DashboardPage = () => {
  return (
    <>
      <AdminLayout>
        <div className="p-5">
          <PieChartCard />
        </div>
      </AdminLayout>
    </>
  );
};

export default DashboardPage;
