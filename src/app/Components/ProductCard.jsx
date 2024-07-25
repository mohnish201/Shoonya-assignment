import { MapPin } from "lucide-react"
import Link from "next/link"
import { useDateFormat } from "../hooks/useDateFormat"
import { useFormatCurrency } from "../hooks/useFormatCurrency"

const ProductCard = ({ item }) => {
    const { formatDate } = useDateFormat()
    const { formatCurrency } = useFormatCurrency()
    return (
        <div className="shadow-xl rounded-md">
            <Link href={`/products/${item?.id}`}>
                <div className="overflow-hidden">
                    <img className=" w-full hover:scale-110 transition-all duration-500 rounded-t-md aspect-video object-cover object-center" src={item?.image} alt={item?.title} />
                </div>
            </Link>

            <div className="p-4 space-y-3">
                <h3 className="text-xl text-primary font-[600]">{item?.title}</h3>
                <p className="line-clamp-1">{item?.description}</p>

                <div className="flex gap-6 text-sm items-center">
                    <p className="font-[500] flex items-center gap-1"><MapPin className="w-4 text-primary h-4" /> {item?.location}</p>
                    <p className="font-[500]">{item?.type}</p>
                    <p className="font-[500]">{item?.condition}</p>
                </div>



                {/* <div className="flex items-center gap-10">
                    <div className="text-sm">
                        <p className="text-sm text-gray-700">Type</p>
                        <p className="font-[500] text-primary text-sm">{item?.type}</p>
                    </div>
                    <div className="text-sm">
                        <p className="text-sm text-gray-700">Location</p>
                        <p className="font-[500] text-primary text-sm">{item?.location}</p>
                    </div>
                    <div className="text-sm">
                        <p className="text-sm text-gray-700">Condition</p>
                        <p className="font-[500] text-primary text-sm">{item?.condition}</p>
                    </div>
                </div> */}
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-[600] text-primary">{formatCurrency(item?.price)}</h3>
                    <p>{formatDate(item?.date)}</p>
                </div>



            </div>

        </div>
    )
}

export { ProductCard }