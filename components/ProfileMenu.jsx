import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
const data = [
    { id: 1, name: "User", subMenu: true },
]

const subMenuData = [
    { id: 1, name: "Profile", value: "profile" },
    { id: 2, name: "Address", value: "address" },
    { id: 3, name: "Order", value: "order" },
    { id: 4, name: "Logout", value: "logout" },
]

export default function ProfileMenu({ showProfileMenu, setShowProfileMenu }) {
    return (
        <ul className={`hidden md:flex items-center gap-8 font-medium text-black`}>
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item.subMenu ?
                            (<li className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowProfileMenu(true)}
                                onMouseLeave={() => setShowProfileMenu(false)}
                            >
                                {/* {item.name} */}
                                <Link href="/dashboard">
                                    <div className="w-8 md:w-12 h-8 md:h-12 
                                    rounded-full flex justify-center 
                                    items-center hover:bg-black/[0.05] 
                                    ursor-pointer relative">
                                        <IoMdContact className="text-[15px] md:text-[20px]" />
                                    </div>
                                </Link>
                                {/* <BsChevronDown size={14} /> */}
                                {showProfileMenu && (<ul className="bg-white absolute top-12 left-0 min-w-[250px] px-1 text-black shadow-lg">
                                    {subMenuData.map((submenu) => {
                                        return (
                                            <Link key={submenu.id} href={`/user/${submenu.value}`} onClick={() => setShowProfileMenu(false)}>
                                                <li className="h-12 flex justify-between 
                                                items-center px-3 hover:bg-black/[0.03] rounded-md">
                                                    {submenu.name}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>)}
                            </li>) : (
                                <li className="cursor-pointer"><Link href={item.url}>{item.name}</Link></li>
                            )}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}