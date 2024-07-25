import Image from "next/image";
import { getProducts } from "./actions/products.action";
import { Controller } from "./Components/Controller";
import { Header } from "./Components/Header";
import { NoDataFound } from "./Components/NoDataFound";
import { Pagination } from "./Components/Pagination";
import { ProductCard } from "./Components/ProductCard";

const home = async ({ searchParams }) => {
  let { data, pageEnd } = await getProducts(searchParams);
  console.log(data)
  return <div className="w-[95%] max-w-[90em] m-auto my-8">

    <Header desc={"Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation"} imgSrc={'/yoga-banner-home.jpg'} text="Discover your Inner Peace" />
    <Controller />


    {(!data.length || data == 'Not found') ? <NoDataFound /> : <div className="grid gap-10 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => <ProductCard key={item?.id} item={...item} />)}
    </div>}

    <Pagination searchParams={searchParams} pathname="/" pageEnd={pageEnd} />

  </div>
}

export default home
