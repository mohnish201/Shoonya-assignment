import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const Pagination = ({ searchParams, pageEnd = 1, pathname }) => {

    const page = Number(searchParams.page) || 1;

    return (
        <div className="flex gap-4 items-center w-full justify-center">
            <Link href={{ pathname: pathname, query: { page: page - 1 } }}>
                <button disabled={page == 1} className="py-1 disabled:bg-blue-300 disabled:cursor-not-allowed px-4 flex items-center gap-2 rounded-md bg-primary text-primary-foreground">
                    <ArrowLeft />  Prev
                </button>
            </Link>
            <p className="font-[600]">{page} of {pageEnd}</p>
            <Link href={{ pathname: pathname, query: { page: page + 1 } }}>
                <button disabled={page == pageEnd} className="py-1 disabled:bg-blue-300 disabled:cursor-not-allowed px-4 flex items-center gap-2 rounded-md bg-primary text-primary-foreground">
                    Next <ArrowRight />
                </button>
            </Link>
        </div>
    )
}

export { Pagination }