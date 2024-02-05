import Link from "next/link";
import React from "react";

const ProductCard = ({data}) => {
    return (
        <Link href={`/product/${data?.product_id}`} className="transform bg-white duration-500 hover:scale-105 cursor-pointer drop-shadow-sm">
            <img className="transitioin duration-1000 w-full rounded-[25px] shadow-black hover:rotate-12" src="/product-1.webp" alt="Product Image"/>
            <div className="product_card p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{data?.product_name}</h2>
                <div className="lg:flex font-size:10 items-center text-black/[0.5] ">
                    <p className="mr-2 text-sm font-semibold"> 
                    <span content="\20B9">&#8377;</span> 
                    {data?.selling_price}</p>
                    <p className="text-sm font-medium line-through">
                    <span content="\20B9">&#8377;</span>
                    {data?.product_mrp}
                    </p>
                    <p className="lg:ml-auto lg:font-medium text-green-500 text-xs font-normal">
                        {data?.discount}% off
                    </p>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard;