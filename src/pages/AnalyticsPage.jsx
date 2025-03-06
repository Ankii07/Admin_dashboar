
import OverviewCards from "../components/Analytics/OverviewCards";
import RevenueChart from "../components/Analytics/RevenueChart";
import ChannelPerformance from "../components/Analytics/ChannelPerformance";
import ProductPerformance from "../components/Analytics/ProductPerformance";
import UserRetention from "../components/Analytics/UserRetention";
import CustomerSegmentation from "../components/Analytics/CustomerSegmentation";
import AIPoweredInsights from "../components/Analytics/AIPoweredInsights";
import Header from "../components/Common/Header";

const AnalyticsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards/>
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>

				<AIPoweredInsights />
			</main>
		</div>
	);
};
export default AnalyticsPage;
