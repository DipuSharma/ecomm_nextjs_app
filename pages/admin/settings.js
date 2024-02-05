import React from "react";
import AdminHeader from "@/components/AdminComponents/Header";
const Settings = () => {
    const page_data = "SETTINGS"
    return (
        <div className="bg-gray-100 min-h-screen">
            <AdminHeader page_data={page_data}/>
        </div>
    )
}

export default Settings;