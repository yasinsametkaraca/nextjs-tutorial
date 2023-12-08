"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Trial = () => {
    const routerRedirect = useRouter()

    return (
        <>
            <div onClick={() => routerRedirect.push("/about")} >Push</div>
            <div onClick={() => routerRedirect.back()} >Back</div>
            <div onClick={() => routerRedirect.forward()} >Forward</div>
            <div onClick={() => routerRedirect.refresh()} >Refresh</div>
        </>
    )
}
export default Trial

