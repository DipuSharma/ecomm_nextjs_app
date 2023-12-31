import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
const Category = () => {
    const router = useRouter();
    const { slug } = router.query
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold
                    leading-tight">
                        Running Shell
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14
                    px-5 md:px-0">
                    <ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard />
                </div>
            </Wrapper>
        </div>
    )
}
export default Category;