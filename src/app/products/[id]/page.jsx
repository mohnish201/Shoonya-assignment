import { getProductById } from '@/app/actions/products.action'
import { useFormatCurrency } from '@/app/hooks/useFormatCurrency';
import React from 'react'

const productView = async ({ params: { id } }) => {

    let data = await getProductById(id);
    const { formatCurrency } = useFormatCurrency()
    return (
        <div className="w-[95%] max-w-[90em] m-auto my-6">
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-10">
                <div className='w-full'>
                    <img src={data?.image} className="object-cover rounded-lg w-full h-[300px] lg:h-[85vh] max-h-[700px] object-center" alt={data?.title} />
                </div>
                <div className='w-full p-4 lg:p-0 space-y-4 '>
                    <h2 className='text-2xl lg:text-3xl font-[600] text-primary'>{data?.title}</h2>
                    <p>{data?.description}</p>

                    <p className='font-[500] text-lg'>Location: {data?.location}</p>
                    <p className='font-[500] text-lg'>Type: {data?.type}</p>
                    <p className='font-[500] text-lg'>Condition: {data?.condition}</p>
                    <p className='font-[500] text-lg'>Duration: {data?.duration} days</p>

                    <div className='flex pb-6 items-center flex-wrap gap-4'>
                        {data?.tag?.map((el, index) => <p className='capitalize px-4 py-1 rounded-xl bg-primary text-primary-foreground' key={index}>{el}</p>)}
                    </div>

                    <h2 className='text-3xl font-[600]'>{formatCurrency(data?.price)}</h2>
                </div>
            </div>
        </div>
    )
}

export default productView