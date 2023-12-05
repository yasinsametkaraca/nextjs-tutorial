import React from 'react';
import Link from "next/link";

const Page = ({params}) => {
    return (
        <div>
            Page Detail {params.id}
        </div>
    );
};

export default Page;