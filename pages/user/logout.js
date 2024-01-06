import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import {removeUserSession} from "@/utils/common";

export default function Logout() {
    const router = useRouter()

    // let data=({state.username, state.password})
    // async function handleSubmit() {
    //     alert(JSON.stringify(state))
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    //         method: "POST",
    //         headers: {
    //             "content-Type": "application/json",
    //         },
    //         body: JSON.stringify(state)
    //     })
    //     if(res) {
    //         const result = await res.json()
    //         setUserSession(result.data.access_token)
    //         // router.push('')
    //     } else {
    //         router.push('/signin')
    //     }
    // }

    useEffect(() => {
        logout()
    }, [])

    function logout() {
        removeUserSession("token")
        router.push("/signin")
    }
    return (
        <div className="relative min-h-screen bg-purple-100 backdrop-blur flex justify-center 
        items-center bg-texture bg-cover py-28 sm:py-0">
            <div className="p-4 sm:p-8 flex-1">
            </div>
        </div>

    )
}
