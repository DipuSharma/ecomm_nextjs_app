import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import AuthMenu from "./AuthMenu";
import { RiLoginCircleLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { getAuthToken } from "@/utils/common";
import { useRouter } from "next/router";



const Header = () => {
    const router = useRouter()
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [token, setToken] = useState(false);

    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    async function setTokenData() {
        setToken(true)
    }

    async function fetchProfile(token) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
        const result = await response.json();
        if (!response.ok) {
            setToken(false);
            localStorage.removeItem("token")
            localStorage.removeItem("user_data")
            router.push('/signin')
        }
        if (result?.detail){
            setToken(false);
            localStorage.removeItem("token")
            localStorage.removeItem("user_data")
            router.push('/signin')
        }
        else {
            setToken(true)
            localStorage.setItem("token", token)
            localStorage.setItem("user_data", JSON.stringify(result?.data))
        }
    }
    useEffect(() => {
        setTokenData(getAuthToken())
        fetchProfile(getAuthToken())
    }, [getAuthToken()])



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


    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

    return (
        <>
            <div className={`w-full h-[50px] 
                md:h-[80px] bg-white flex 
                items-center 
                justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
                <Wrapper clasName={`h-[60px] flex justify-between item-center`}>
                    <Link href='/' style={{ marginTop: 20 }}>
                        <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
                    </Link>
                    {/* Menu Item */}
                    <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

                    {mobileMenu && (<MobileMenu showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} />)}

                    <div className="flex items-center gap-2 text-black">
                        
                        {/* Auth Menu Add */}
                        {
                            token ? (<AuthMenu />) : <>
                                {/* SignUp Button start*/}
                                <Link href="/signup" >
                                    <div className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 
                                    text-xs uppercase leading-normal text-primary 
                                    transition duration-150 ease-in-out focus:text-primary-600 focus:outline-none 
                                    focus:ring-0 active:text-primary-700 
                                    motion-reduce:transition-none font-bold">
                                        <RiLoginCircleLine className="text-[15px] md:text-[20px]" />
                                    </div>

                                </Link>
                                {/* SignUp button end */}
                            </>
                        }


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
            </div>
        </>
    )
}
export default Header;