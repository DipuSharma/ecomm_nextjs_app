import React from "react";
import AdminHeader from "@/components/AdminComponents/Header";
import AdminFooter from "@/components/AdminComponents/Footer";
import TopCards from "@/components/AdminComponents/TopCards";
import BarChart from "@/components/AdminComponents/BarChart";
import RecentOrders from "@/components/AdminComponents/RecentOrders";

const Home = () => {
    return (
        <main className="bg-gray-100 min-h-screen">
            <AdminHeader />
            <TopCards />
            <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
                <BarChart />
                <RecentOrders/>
            </div>
            <AdminFooter />
        </main>
    )
}
export default Home;