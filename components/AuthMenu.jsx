import Link from "next/link";
import { getUser, getAuthToken, removeUserSession } from "@/utils/common";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { RiLoginCircleLine } from "react-icons/ri";
import React, { useState, useEffect } from "react";

const subMenuData = [
    { id: 1, name: "Profile", value: "" },
    { id: 2, name: "Address", value: "address" },
    { id: 3, name: "Order", value: "order" },
    { id: 4, name: "Logout", value: "logout" },
]

const AuthMenu = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    // function profileMenuOn() { setShowProfileMenu(!showProfileMenu) }
    const handleToggle = () => {
        setShowProfileMenu(!showProfileMenu)
    };
    return (

        <>
            <Link href="/cart">
                <div className="w-8 md:w-12 h-8 md:h-12 
                                    rounded-full flex justify-center 
                                    items-center hover:bg-black/[0.05] 
                                    cursor-pointer relative">
                    <BsCart className="text-[15px] md:text-[20px]" />
                    <div className="h-[14px] md:h-[18px] min-w-[14px] 
                                    md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 
                                    md:left-7 text-white text-[10px] md:text-[12px] flex justify-center 
                                    items-center px-[2px] md:px-[5px]">5</div>
                </div>
            </Link>
            {/* Profile Icon Start */}
            <button id="dropdownDefaultButton" type="button" data-dropdown-toggle="dropdown" 
            onClick={handleToggle} className="w-8 md:w-12 h-8 md:h-12 
                                    rounded-full flex justify-center 
                                    items-center hover:bg-black/[0.05] 
                                    cursor-pointer relative">
                <AiOutlineUser className="text-[15px] md:text-[20px]" />
            </button>
            {showProfileMenu && (
                <ul aria-labelledby="dropdownDefaultButton"
                    className="absolute lg:left-700 top-full mt-1 min-w-[100px] 
                    lg:min-w-[150px] overflow-hidden rounded-2xl bg-white sm:ml-5">
                    {subMenuData.map((submenu) => {
                        return (
                            <Link key={submenu.id} href={`/user/${submenu.value}`} onClick={() => setShowProfileMenu(false)}>
                                <li className="h-12 flex justify-between 
                                                items-center px-2 font-thin hover:bg-black/[0.03] rounded-md">
                                    {submenu.name}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            )}
            {/* Profile Icon End */}
        </>)
};

export default AuthMenu;