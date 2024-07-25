'use server'

import { revalidatePath } from "next/cache";

const getProducts = async (searchParams) => {
    const params = new URLSearchParams({ limit: 3, page: 1, ...searchParams })
    const params2 = new URLSearchParams(searchParams);
    params2.delete('limit');
    params2.delete('page')
    try {
        let total = await fetch(`${process.env.SERVER}?${params2.toString()}`)
        let response = await fetch(`${process.env.SERVER}?${params.toString()}`);
        let data = await response.json();
        let length = await total.json()
        console.log(length)
        let pageEnd = Math.ceil(+(length.length / params.get('limit')))
        revalidatePath('/')
        return {
            data,
            pageEnd
        }
    } catch (error) {
        return {
            data: [],
            pageEnd: 1
        }
    }
}

const getProductById = async (id) => {

    try {
        const response = await fetch(`${process.env.SERVER}/${id}`);
        const data = await response.json()
        return data
    } catch (error) {
        return {}
    }


}

export { getProducts, getProductById }