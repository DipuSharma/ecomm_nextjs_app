import React, { useEffect, useState } from "react";
import { BsFacebook, BsGoogle, BsTwitter, BsInstagram } from "react-icons/bs";
import { getUserDetails, getAuthToken } from "@/utils/common";

import{ useRouter } from "next/router";

export default function User() {
    const router = useRouter()

    const [record, setRecord] = useState(null)

    useEffect(() => {
        setRecord(JSON.parse(getUserDetails()))
    }, [getAuthToken()])

    return (
        <div className="relative min-h-screen bg-purple-100 backdrop-blur flex justify-center 
        items-center bg-texture bg-cover py-28 sm:py-0">
            <div className="p-4 sm:p-8 flex-1">
            <h2>Profile {record?.first_name} {record?.last_name}</h2>
            <p>Username: {record?.username}</p>
            </div>
        </div>

    )
}
