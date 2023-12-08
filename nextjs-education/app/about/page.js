"use client"
import React from 'react';
import {useSearchParams, usePathname} from "next/navigation";

const Page = () => {
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    const surname = searchParams.get('surname')
    console.log("useSearchParams", name, surname)

    const pathname = usePathname()
    console.log("pathname", pathname)

    return (
        <div>
            About
        </div>
    );
};

export default Page;