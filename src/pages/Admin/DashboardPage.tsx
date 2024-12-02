import DashboardInfoCard from '@/components/DashboardInfoCard';
import PieChartCard from '@/components/PieChartCard';

const DashboardPage = () => {
    return (
        <div className='p-5'>
            <DashboardInfoCard />
            <PieChartCard />
        </div>
    );
};

export default DashboardPage;
