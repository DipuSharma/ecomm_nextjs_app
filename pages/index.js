import React from "react";
import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"


export default function Home() {
  const router = useRouter()
  const [record, setRecord] = useState(null)
  async function getAllProduct() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/all-product`, {
        method: "GET",
        headers: {
            "content-Type": "application/json",
        },
        // body: JSON.stringify(state)
    })
    const data = await response.json();
    if (!response.ok) {
        setErrorMessage(data.detail);
    }
    else{
      setRecord(data)
    }
  }
  useEffect(() => {
    history.pushState(null, '', router.asPath);
    window.addEventListener('popstate', function (event) {
        history.pushState(null, '', router.asPath);
    });
    getAllProduct()
  }, [])
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
          { record ? (<>
            { record.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <ProductCard data={item}/>
                </React.Fragment>
              )
            })
            }
          </>): (<>
            <ProductCard /><ProductCard /><ProductCard /><ProductCard />
          </>)}
        </div>
      </Wrapper>
    </main>
  )
}
