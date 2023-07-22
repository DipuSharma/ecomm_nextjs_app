import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"
import Image from "next/image"
export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[20px] md:text-[34px] mb-5 font-semibold
          loading-tight">Sell Live Now</div>
          <div className="text-md md:text-xl">Hey ! buy early to the close 50% discount.</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14
          px-5 md:px-0">
          <ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard />
        </div>
      </Wrapper>
    </main>
  )
}
