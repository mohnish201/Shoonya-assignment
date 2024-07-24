import Image from "next/image";
import { getProducts } from "./actions/products.action";
import { Controller } from "./Components/Controller";
import { NoDataFound } from "./Components/NoDataFound";
import { Pagination } from "./Components/Pagination";
import { ProductCard } from "./Components/ProductCard";

const home = async ({ searchParams }) => {
  let { data, pageEnd } = await getProducts(searchParams);
  console.log(data)
  return <div className="w-[95%] border m-auto my-8">
    <Controller />


    {!data || data.length === 0 ? <NoDataFound /> : <div className="grid gap-10 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((item) => <ProductCard key={item?.id} item={...item} />)}
    </div>}

    <Pagination searchParams={searchParams} pathname="/" pageEnd={pageEnd} />

  </div>
}

export default home
