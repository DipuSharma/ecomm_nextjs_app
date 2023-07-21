import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProduct from "@/components/RelatedProduct";

const ProductDetails = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* Left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full
                        mx-auto lg:mx-0">
                        <ProductDetailsCarousel />
                    </div>
                    {/* Left column end */}


                    {/* Right column start */}
                    <div className="flex-[1] py-3">
                        {/* Product Title */}
                        <div className="text-[34px] font-semibold mb-2">
                            Product Name
                        </div>
                        {/* Product Subtitle */}
                        <div className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoes
                        </div>

                        {/* Product Price */}
                        <div className="text-lg font-semibold mb-5">
                            MRP : <span content="\20B9">&#8377;</span> 2999.00
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            Incl. of  taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* Product Size Range Start  */}
                        <div className="mb-10">
                            {/* Heading Start  */}
                            <div className="flex justify-between mb-2">
                                
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                                
                            </div>
                            {/* Heading End  */}
                            {/* Size Start  */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="border rounded-md text-center py-2
                                font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-2
                                font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-2
                                font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-2
                                font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-2
                                font-medium hover:border-black cursor-pointer bg-black/[0.1] opacity-60">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-2
                                font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-2
                                font-medium hover:border-black cursor-pointer bg-black/[0.1] opacity-60">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-2
                                font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-2
                                font-medium hover:border-black cursor-pointer bg-black/[0.1] opacity-60">
                                    UK 6
                                </div>
                            </div>
                            {/* Size End  */}

                            {/* Show error start  */}
                            <div className="text-red-600 mt-1">
                                Size selection is required.
                            </div>
                            {/* Show error end  */}
                        </div>
                        {/* Product Size Rang End  */}

                        {/* Add to cart button start */}
                        <button className="w-full py-4 rounded-full bg-black
                        text-white text-lg font-medium transition-transform
                        active:scale-95 mb-3 hover:opacity-80">
                            Add to cart
                        </button>
                        {/* Add to cart button end */}

                        {/*  Wishlist button start */}
                        <button className="w-full py-4 rounded-full border border-black
                        text-lg font-medium transition-transform active:scale-95
                        flex items-center justify-center gap-2 hover:opacity-80 mb-10">
                            Wishlist
                            <IoMdHeartEmpty size={20}/>
                        </button>
                        {/*  Wishlist button end */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details.
                            </div>
                            <div className="text-md mb-5">
                                This product is very strong and pure
                                waterproof.
                            </div>
                        </div>
                    </div>
                    {/* Right column end */}
                </div>
                <RelatedProduct/>
            </Wrapper>
        </div>
    )
}
export default ProductDetails;