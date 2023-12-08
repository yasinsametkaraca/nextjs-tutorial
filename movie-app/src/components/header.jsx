"use client"
import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import MenuItem from "@/components/MenuItem";
import ThemeComp from "@/components/ThemeComp.jsx";
import {useRouter} from "next/navigation";

const Header = () => {
    const [keyword, setKeyword] = useState("");
    const router = useRouter();

    const menu = [
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Sign In",
            url: "/login",
        },
    ];

    const searchMovies = (e) => {
        if (e.key === "Enter" && keyword.length >= 3) {
            router.push(`/search/${keyword}`);
            setKeyword('')
        }
    }
    return (
        <div className="flex items-center gap-7 h-20 p-5">
            <div onClick={() => router.push("/")} className="bg-amber-500 rounded-lg p-3 text-lg text-gray-900 font-medium cursor-pointer">Movie App</div>
            <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
                <input value={keyword} onKeyDown={searchMovies} onChange={e => setKeyword(e.target.value)} className="outline-none flex-1 bg-transparent" type="text" placeholder="Search" />
                <FaSearch size={25} />
            </div>
            <ThemeComp></ThemeComp>
            {
                menu.map((item, index) => (
                    <MenuItem item={item} key={index}></MenuItem>
                ))
            }
        </div>
    )
}
export default Header
