import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
]

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running Shoes", doc_count: 64 },
    { id: 4, name: "Footbar shoes", doc_count: 107 },
]

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    return (
        <ul className={`hidden md:flex items-center gap-8 font-medium text-black`}>
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item.subMenu ?
                            (<li className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                                >
                                {item.name}
                                <BsChevronDown size={14} />
                                {showCatMenu && (<ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-lg">
                                    {subMenuData.map((submenu) => {
                                        return (
                                            <Link key={submenu.id} href={`/category/${submenu.name}`} onClick={() => setShowCatMenu(false)}>
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
            <div className=" relative items-center justify-center w-30 md:w-30 ">
                            <form method="GET">
                                <div className="relative text-gray-600 focus-within:text-gray-400">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <svg fill="none" stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" viewBox="0 0 24 24" 
                                    className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </span>
                                <input type="search" name="q" className="py-2 text-sm text-black 
                                rounded-md pl-10 focus:outline-none 
                                focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off"/>
                                </div>
                            </form>
                        </div>
        </ul>
    )
}
export default Menu;