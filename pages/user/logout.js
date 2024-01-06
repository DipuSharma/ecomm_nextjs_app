import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import {getAuthToken, removeUserSession} from "@/utils/common";

export default function Logout() {
    const router = useRouter()
    const token = getAuthToken()
    
    function logout(token) {
        if (!token){
             router.push('/signin')
            }
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(response => response.json())
            .then(data => {
                const result = data;
                console.log(result);
                if(result){
                    removeUserSession()
                    router.push('/signin')
                }
            })
            .catch(error => console.error(error));
    }
    useEffect(() => {
        logout(token)
    }, [])

    return (
        <div className="relative min-h-screen bg-purple-100 backdrop-blur flex justify-center 
        items-center bg-texture bg-cover py-28 sm:py-0">
            <div className="p-4 sm:p-8 flex-1">
            <h2>Logout</h2>
            </div>
        </div>

    )
}
