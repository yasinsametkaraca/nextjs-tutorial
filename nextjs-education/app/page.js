import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google';
import {cookies} from "next/headers";
import Use_client_ex from "@/app/use_client_ex";
import {redirect} from "next/navigation";
import Trial from "@/app/trial";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const fetchData1 = async () => {
    const response = await fetch('https://restcountries.com/v3.1/name/peru')
    return response.json()
}
const fetchData2 = async () => {
    const response = await fetch('https://restcountries.com/v3.1/name/united')
    return response.json()
}

const Page = async () => {

    await sleep(3000)
    const newCookies = cookies()

    let nav1 =  false
    if (nav1) {
        redirect('/about')
    }

    const data1 = fetchData1()
    const data2 = fetchData2()
    const resultData = await Promise.all([data1, data2]) // wait for all promises to resolve. Hepsinin tek tek çekmek yerine toplu çekmek için promise all kullanılır.

    console.log(resultData)

    console.log(newCookies.getAll())

    return (
        <>
            <h1>Page</h1>
            <Link className={inter.className} href="/about">Click here to go to About</Link>
            <hr></hr>
            <Link href="/about?name=ysk">Click here to go to About (Filter)</Link>
            <hr></hr>
            <Link href={{
                pathname: '/about',
                query: {
                    name: 'ysk',
                    surname: 'karaca'
                }
            }}>Click here to go to About (Filter Object)
            </Link>
            
            <hr></hr>
            
            <Image
                src='https://cdnuploads.aa.com.tr/uploads/sirkethaberleri/Contents/2021/05/28/thumbs_b_c_98c3d9bd57097f565d055dedf624822d.jpg'
                alt='Picture of the author'
                width={250}
                height={250}
            />
            <Use_client_ex></Use_client_ex>
            <Trial></Trial>

        </>
    );
};

export default Page;