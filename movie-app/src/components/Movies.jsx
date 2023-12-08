"use client"
import React from 'react'
import Image from "next/image";
import {useRouter} from "next/navigation";

const Movies = ({movie}) => {

    const router = useRouter()

    return (
        <div onClick={() => router.push(`/movie/${movie?.id}`)} className='flex min-w-[470px] img-container relative cursor-pointer'>
            <Image style={{objectFit: 'cover'}} src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path}`} alt="" width={470} height={300}/>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent p-2 opacity-0 hover:opacity-100 transition-opacity'>
                <div className='text-xl font-bold text-gray-200'>{movie?.title || movie?.name || movie?.original_name}</div>
                <div className='text-gray-200'>{movie?.vote_average}</div>
            </div>
        </div>
    )
}
export default Movies
