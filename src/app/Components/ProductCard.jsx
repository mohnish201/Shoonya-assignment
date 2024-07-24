import Link from "next/link"
import { useDateFormat } from "../hooks/useDateFormat"

const ProductCard = ({ item }) => {
    const { formatDate } = useDateFormat()
    return (
        <div className="bg-primary-background rounded-md">
            <Link href={`/products/${item?.id}`}>
                <div className="overflow-hidden">
                    <img className="w-full hover:scale-110 transition-all duration-500 rounded-t-md aspect-video object-cover object-center" src={item?.image} alt={item?.title} />
                </div>
            </Link>

            <div className="p-4 space-y-2">
                <h3 className="text-xl font-[600]">{item?.title}</h3>
                <p>{item?.description}</p>
                <p>{formatDate(item?.date)}</p>
            </div>

        </div>
    )
}

export { ProductCard }