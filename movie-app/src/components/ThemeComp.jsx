"use client"
import React, {useEffect, useState} from 'react'
import { CiDark } from "react-icons/ci";
import { useTheme } from 'next-themes'
import { CiLight } from "react-icons/ci";


const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeMode = theme === 'system' ? systemTheme : theme
    console.log(theme)

    return (
        <div>
            {
                mounted &&
                    themeMode === 'dark' ?
                        <CiDark onClick={() => setTheme('light')} className='cursor-pointer' size={25} />
                    :
                        <CiLight onClick={() => setTheme('dark')} className='cursor-pointer' size={25} />
            }
        </div>
    )
}
export default ThemeComp
