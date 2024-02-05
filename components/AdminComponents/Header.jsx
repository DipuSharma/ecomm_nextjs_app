import { useRouter } from "next/router";
import { getAuthToken } from "@/utils/common";
import React, {useEffect, useState} from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { getUserDetails } from "@/utils/common";
const AdminHeader = ({page_data}) => {
    const router = useRouter()
    const [record, setRecord] = useState(null)

    useEffect(() => {
        setRecord(JSON.parse(getUserDetails()))
    }, [getUserDetails()])
    async function logout() {
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
                    localStorage.removeItem("admin")
                    localStorage.removeItem("user_data")
                    router.push('/signin')
                }
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        history.pushState(null, '', router.asPath);
        window.addEventListener('popstate', function (event) {
            history.pushState(null, '', router.asPath);
        });
    }, [])
    return (
        <div className="flex justify-between px-4 pt-4">
            <h2>{page_data}</h2>
            <h3>Welcome Back, {record?.first_name} {record?.last_name}</h3>
            <button type="button" onClick={logout}><AiOutlineLogout/></button>
        </div>
    )
}

export default AdminHeader;