'use client'

import { usePathname, useRouter } from "next/navigation"
import { type } from "os"
import path from "path"
import { clearTimeout } from "timers"

const dates = [
    {
        label: "2023-2024"
    },
    {
        label: "2024-2025"
    }
]

const price = [
    {
        label: 'Low-to-High',
        value: 'asc'
    },
    {
        label: 'High-to-Low',
        value: 'desc'
    }
]

const types = [
    {
        label: "Signature"
    },
    {
        label: "Standalone"
    }
]


const Controller = (searchParams) => {

    const router = useRouter();
    const pathname = usePathname()

    const onSort = ({ target: { value, name } }) => {

        const params = new URLSearchParams(location.search);

        if (value == "") {
            params.delete('sortBy')
            params.delete('order')
        }
        else {
            params.set('sortBy', name);
            params.set('order', value)
        }

        router.push(pathname + '?' + params.toString(), { scroll: false })
        console.log(params.toString())
    }

    const onSelectType = ({ target: { value } }) => {

        const params = new URLSearchParams(location.search)

        if (value == "") {
            params.delete('type')
        }
        else {
            params.set('type', value)
        }
        router.push(pathname + '?' + params.toString(), { scroll: false })
        console.log(params.toString())
    }

    const onSearch = (e) => {

        const params = new URLSearchParams();

        const { key, target } = e;

        if (key === 'Enter' && target.value) {
            params.append('search', target.value)
        }
        else {
            params.delete('search')
        }

        router.replace(pathname + '?' + params.toString(), { scroll: false })

    }




    return (
        <div className="flex gap-4 flex-col lg:flex-row lg:justify-between lg:items-center">
            <section className="lg:space-x-4 space-y-4 lg:space-y-0">
                <select onChange={onSort} name="price" className="p-2 w-full lg:w-fit text-primary-foreground bg-primary rounded-lg border">
                    <option value="">Sort By Price</option>
                    {price?.map((price, index) => <option value={price?.value} key={index + price?.label}>{price?.label}</option>)}
                </select>

                <select onChange={onSelectType} value={searchParams.type} name="type" className="p-2 w-full lg:w-fit text-primary-foreground bg-primary rounded-lg border">
                    <option value="">Filter By Type</option>
                    {types?.map((type, index) => <option value={type?.label} key={index + type?.label}>{type?.label}</option>)}
                </select>
            </section>

            <section>
                <input onKeyDown={onSearch} className="p-2 w-full lg:w-[400px] placeholder:text-white text-primary-foreground bg-primary rounded-lg border" type="text" placeholder="Search retreats by title" />
            </section>
        </div>
    )
}

export { Controller }