import { removeUserSession } from "@/utils/common";
import { useRouter } from "next/router";
import { getAuthToken } from "@/utils/common";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
const AdminHeader = () => {
    const router = useRouter()
    function logout() {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthToken()}`,
            },
        }).then(response => response.json())
            .then(data => {
                const result = data;
                if(result.data){
                    localStorage.removeItem("token")
                }
                if(result) {
                    localStorage.removeItem("token")
                    router.push('/signin')
                }
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="flex justify-between px-4 pt-4">
            <h2>Dashboard</h2>
            <h3>Welcome Back, Admin</h3>
            <button type="button" onClick={logout}><AiOutlineLogout/></button>
        </div>
    )
}

export default AdminHeader;