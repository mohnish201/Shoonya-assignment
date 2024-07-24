'use server'

import { revalidatePath } from "next/cache";

const getProducts = async (searchParams) => {
    const params = new URLSearchParams({ limit: 3, page: 1, ...searchParams })
    try {
        let response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?${params.toString()}`);
        let data = await response.json();
        revalidatePath('/')
        return {
            data,
            pageEnd: 7
        }
    } catch (error) {
        return {
            data: [],
            pageEnd: 1
        }
    }
}

export { getProducts }