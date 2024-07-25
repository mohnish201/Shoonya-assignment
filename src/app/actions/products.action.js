'use server'

import { revalidatePath } from "next/cache";

const getProducts = async (searchParams) => {
    const params = new URLSearchParams({ limit: 3, page: 1, ...searchParams })
    const params2 = new URLSearchParams(searchParams);
    params2.delete('limit');
    params2.delete('page')
    try {
        let total = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?${params2.toString()}`)
        let response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?${params.toString()}`);
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
        const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`);
        const data = await response.json()
        return data
    } catch (error) {
        return {}
    }


}

export { getProducts, getProductById }