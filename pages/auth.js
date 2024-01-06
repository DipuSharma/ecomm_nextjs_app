import React, { useEffect, useState } from "react";
import { BsFacebook, BsGoogle, BsTwitter, BsInstagram } from "react-icons/bs";
import { getAuthToken, removeUserSession } from "@/utils/common"
import { useRouter } from "next/router";
export default function Auth() {
    const [content, setContent] = useState(null)
    const router = useRouter()
    async function authUser(token) {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(response => response.json())
            .then(data => {
                const posts = data.data;
                if(posts.is_admin){
                    router.replace('/admin')
                }
                if(posts.is_user){
                    router.push('/user/profile')
                }
                // setContent(posts)
            })
            .catch(error => console.error(error));
    }
    if (getAuthToken()) {
        useEffect(() => {
            authUser(getAuthToken())
        }, [])
    }

    return (
        <div className="relative min-h-screen bg-purple-100 backdrop-blur flex justify-center 
        items-center bg-texture bg-cover py-28 sm:py-0">
            <div className="p-4 sm:p-8 flex-1">
                {/* <h1>Auth Page {content.id}</h1>
                <p> Admin {content.is_admin}</p> */}
            </div>
        </div>

    )
}
