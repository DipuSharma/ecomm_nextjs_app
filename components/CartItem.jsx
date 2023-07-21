import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* Image start */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <img src="product-1.webp" />
            </div>
            {/* Image end */}

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Product Title */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        Product Name
                    </div>
                    {/* Product title end */}

                    {/* Product subtitle start */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] md:hidden block">
                        Men&apos;s Golf Shoes
                    </div>
                    {/* Product subtitle end */}

                    {/* Product Price start */}
                    <div className="text-sm md:text-md font-bold text-black/[0.6] mt-2">
                        MRP : <span content="\20B9">&#8377;</span> 2999.00
                    </div>
                    {/* Product price end */}

                    <div className="text-md font-medium hidden text-black/[0.5] md:black">
                        Men&apos;s Golf Shoes
                    </div>
                </div>
                {/* Selection start */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        <div className="flex items-center  gap-1">
                            <div className="font-semibold">Size:</div>
                            <select className="hover:text-black">
                                <option value="1">UK 6</option>
                                <option value="2">UK 6.5</option>
                                <option value="3">UK 7</option>
                                <option value="4">UK 7.5</option>
                                <option value="5">UK 8</option>
                                <option value="6">UK 8.5</option>
                            </select>
                        </div>

                        <div className="flex items-center  gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select className="hover:text-black">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line className="cursore-pointer text-black/[0.5] hover:text-black
                    text-[16px] md:text-[20px]"/>
                </div>
                {/* Selection end */}
            </div>
        </div>
    )
}
export default CartItem;