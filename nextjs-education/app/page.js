import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google';
import {cookies} from "next/headers";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const Page = () => {

    const newCookies = cookies()
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
            
        </>
    );
};

export default Page;