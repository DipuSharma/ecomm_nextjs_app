import Link from "next/link";
import React from "react";

const ProductCard = () => {
    return (
        <Link href={`/product/${1}`} className="transform bg-white duration-500 hover:scale-105 cursor-pointer drop-shadow-sm">
            <img className="transitioin duration-1000 w-full rounded-[25px] shadow-black hover:rotate-12" src="/product-1.webp" alt="Product Image"/>
            <div className="product_card p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Product Name</h2>
                <div className="lg:flex font-size:10 items-center text-black/[0.5] ">
                    <p className="mr-2 text-sm font-semibold"> 
                    <span content="\20B9">&#8377;</span> 
                    2999.00</p>
                    <p className="text-sm text-base font-medium line-through">
                    <span content="\20B9">&#8377;</span>
                    3999.00
                    </p>
                    <p className="lg:ml-auto lg:font-medium text-base text-green-500 text-xs font-normal">
                        25% off
                    </p>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard;