import AdminHeader from "@/components/AdminComponents/Header";
import AdminFooter from "@/components/AdminComponents/Footer";
import TopCards from "@/components/AdminComponents/TopCards";
import BarChart from "@/components/AdminComponents/BarChart";
import RecentOrders from "@/components/AdminComponents/RecentOrders";
import { getAuthToken } from "@/utils/common";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Home = () => {
    const page_data = "DASHBOARD"
    const router = useRouter()
    const [record, setRecord] = useState(null)
    async function fetchProfile(token) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(response => response.json())
            .then(data => {
                const result = data;
                if (result.data) {
                    setRecord(result.data)
                    localStorage.setItem("user_data", JSON.stringify(result?.data))
                }
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        history.pushState(null, '', router.asPath);
        window.addEventListener('popstate', function (event) {
            history.pushState(null, '', router.asPath);
        });
        fetchProfile(getAuthToken())
    }, [])

    return (
        <main className="bg-gray-100 min-h-screen">
            <AdminHeader page_data={page_data}/>
            <TopCards />
            <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
                <BarChart />
                <RecentOrders />
            </div>
            <AdminFooter />
        </main>
    )
}
export default Home;