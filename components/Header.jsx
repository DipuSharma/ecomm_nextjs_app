import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import ProfileMenu from "./ProfileMenu";
import MobileMenu from "./MobileMenu";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { useRouter } from "next/router";

import { getUser, getAuthToken, removeUserSession } from "@/utils/common";
const subMenuData = [
    { id: 1, name: "Profile", value: "profile" },
    { id: 2, name: "Address", value: "address" },
    { id: 3, name: "Order", value: "order" },
    { id: 4, name: "Logout", value: "logout" },
]
const Header = () => {
    const user = getUser()
    const token = getAuthToken()
    const router = useRouter()
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]")
            } else {
                setShow("shadow-sm")
            }
        } else {
            setShow("translate-y-0")
        }
        setLastScrollY(window.scrollY)
    }

    // function profileMenuOn() { setShowProfileMenu(!showProfileMenu) }
    const handleToggle = () => {
        setShowProfileMenu(!showProfileMenu)
    };

    // useEffect(() => {
    //     history.pushState(null, '', router.asPath);
    //     window.addEventListener('popstate', function (event) {
    //         history.pushState(null, '', router.asPath);
    //     });
    // })
    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

    return (
        <header className={`w-full h-[50px] md:h-[80px] bg-white flex 
        items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
            <Wrapper clasName={`h-[60px] flex justify-between item-center`}>
                <Link href='/' style={{ marginTop: 20 }}>
                    <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
                </Link>
                {/* Menu Item */}
                <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

                {mobileMenu && (<MobileMenu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} />)}

                <div className="flex items-center gap-2 text-black">

                    {token ? (<>
                        {/* Heart Icon Start */}
                        <div className="w-8 md:w-12 h-8 md:h-12 
                        rounded-full flex justify-center 
                        items-center hover:bg-black/[0.05] 
                        cursor-pointer relative">
                            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                            <div className="h-[14px] md:h-[18px] min-w-[14px] 
                            md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 
                            md:left-7 text-white text-[10px] md:text-[12px] flex justify-center 
                            items-center px-[2px] md:px-[5px]">72</div>
                        </div>
                        {/* Heart Icon End */}

                        {/* Cart Icon Start */}
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
                        {/* Cart Icon End */}

                        {/* Profile Icon Start */}
                        <button id="dropdownDefaultButton" type="button" data-dropdown-toggle="dropdown" onClick={handleToggle} class="w-8 md:w-12 h-8 md:h-12 
                                rounded-full flex justify-center 
                                items-center hover:bg-black/[0.05] 
                                cursor-pointer relative">
                            <AiOutlineUser className="text-[15px] md:text-[20px]" />
                        </button>
                        {showProfileMenu && (
                            <ul aria-labelledby="dropdownDefaultButton"
                                className="absolute lg:left-700 top-full mt-1 min-w-[100px] lg:min-w-[200px] overflow-hidden rounded-2xl bg-white"
                                style={{ marginLeft: 50 }}>
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
                            </ul>
                        )}
                        {/* Profile Icon End */}

                    </>) : (
                        <>
                            <div className="flex gap-3">

                                {/* SignUp Button start*/}
                                <Link href="/signup" >
                                    <div className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 
                                    text-xs uppercase leading-normal text-primary 
                                    transition duration-150 ease-in-out hover:bg-blue-500
                                    hover:text-white focus:text-primary-600 focus:outline-none 
                                    focus:ring-0 active:text-primary-700 
                                    motion-reduce:transition-none font-bold">
                                        {/* <BsCart className="text-[15px] md:text-[20px]" /> */}
                                        SignUp
                                    </div>

                                </Link>
                                {/* SignUp button end */}

                            </div>
                        </>
                    )}
                    {/* Mobile Icon Start */}
                    <div className="w-8 md:w-12 h-8 md:h-8 
                        rounded-full flex justify-center 
                        items-center hover:bg-black/[0.05] 
                        ursor-pointer relative -mr-2 lg:hidden md:hidden">
                        {
                            mobileMenu ? (
                                <VscChromeClose className="text-[16px]"
                                    onClick={() => setMobileMenu(false)} />
                            ) : (
                                <BiMenuAltRight className="text-[20px]"
                                    onClick={() => setMobileMenu(true)} />
                            )
                        }
                    </div>
                    {/* Mobile Icon End */}
                </div>

            </Wrapper>
        </header>
    )
}
export default Header