import React, { useEffect, useState } from "react";
import { BsFacebook, BsGoogle, BsTwitter, BsInstagram } from "react-icons/bs";
import { getAuthToken } from "@/utils/common";

import { useRouter } from "next/router";

export default function Profile() {
    const router = useRouter()
    if(!getAuthToken()){
        router.push("/signin")
    }
    const [data, setData] = useState(null)
    async function fetchProfile(token) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(response => response.json())
            .then(data => {
                const result = data;
                if(result.data){
                    console.log(result.data);
                    setData(result.data)
                }
                // setContent(posts)
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        fetchProfile(getAuthToken())
    }, [])

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
                    console.log(result.details);
                    localStorage.removeItem("token")
                }
                if(result) {
                    console.log(result.detail);
                    localStorage.removeItem("token")
                    router.push('/signin')
                }
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="relative min-h-screen bg-purple-100 backdrop-blur flex justify-center 
        items-center bg-texture bg-cover py-28 sm:py-0">
            <div className="p-4 sm:p-8 flex-1">
            <h2>Profile {data?.first_name} {data?.last_name}</h2>
            <p>Username: {data?.username}</p>
            <button type="button" onClick={logout}>Logout</button>
            </div>
        </div>

    )
}
