"use client"
import React from 'react'
import Link from "next/link";
import {useSearchParams} from "next/navigation";


const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    const tabs = [
        {name: 'Popular', url: 'popular'},
        {name: 'Latest', url: 'now_playing'},
        {name: 'Upcoming', url: 'upcoming'},
    ]

    return (
        <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
            {
                tabs.map((tab, index) => (
                    <Link key={index} href={`/?genre=${tab.url}`} className={`${tab.url === genre ? "underline underline-offset-8 text-amber-400" : ""} hover:opacity-75 transform-opacity px-3 py-1 mx-1 text-sm font-semibold text-gray-600 rounded-full dark:text-gray-200 dark:bg-gray-800`}>
                        {tab.name}
                    </Link>
                ))
            }
        </div>
    )
}
export default Tabs
