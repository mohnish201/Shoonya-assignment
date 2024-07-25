
const NoDataFound = () => {
    return (
        <div className="w-full flex flex-col gap-2 justify-center items-center h-[60vh]">
            <img className="w-36" src="/empty.png" alt="empty" />
            <p className="font-[500] text-gray-500 text-xl">Opps! No Results Found</p>
        </div>
    )
}

export { NoDataFound }