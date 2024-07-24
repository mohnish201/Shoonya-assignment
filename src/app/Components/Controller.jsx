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

    const onSelectType = ({ target: { value } }) => {

        const params = new URLSearchParams(searchParams)

        if (value == "") {
            params.delete('type')
        }
        else {
            params.append('type', value)
        }

        router.push(pathname + '?' + params.toString())

    }




    return (
        <div className="flex justify-between items-center">
            <section className="space-x-4">
                <select className="p-2 text-gray-500 lg:text-primary-foreground bg-secondary-background lg:bg-primary rounded-lg border" name="date">
                    <option value="">Filter By Date</option>
                    {dates?.map((date, index) => <option value={date?.label} key={index + date?.label}>{date?.label}</option>)}
                </select>

                <select onChange={onSelectType} value={searchParams.type} name="type" className="p-2 text-gray-500 lg:text-primary-foreground bg-secondary-background lg:bg-primary rounded-lg border">
                    <option value="">Filter By Type</option>
                    {types?.map((type, index) => <option value={type?.label} key={index + type?.label}>{type?.label}</option>)}
                </select>
            </section>

            <section>
                <input className="p-2 lg:w-[400px] text-gray-500 placeholder:text-white lg:text-primary-foreground bg-secondary-background lg:bg-primary rounded-lg border " type="search" placeholder="Search retreats by title" />
            </section>
        </div>
    )
}

export { Controller }