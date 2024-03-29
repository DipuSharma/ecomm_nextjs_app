import React, { useEffect, useState } from "react";
import { BsFacebook, BsGoogle, BsTwitter, BsInstagram } from "react-icons/bs";
import { setUserSession } from "@/utils/common";

import Link from "next/link";
import { useRouter } from "next/router";
export default function Order() {
    const router = useRouter()
    return (
        <div className="relative min-h-screen bg-purple-100 backdrop-blur flex justify-center 
        items-center bg-texture bg-cover py-28 sm:py-0">
            <div className="p-4 sm:p-8 flex-1">
            <h2>Order</h2>
            </div>
        </div>

    )
}
