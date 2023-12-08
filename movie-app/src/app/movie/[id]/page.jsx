import React from 'react'
import Image from "next/image";

const getMovieDetail = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.API_KEY
        }
    }
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    return await res.json()
}

const Page = async ({params}) => {  //params is id
    const {id} = params
    const movieDetail = await getMovieDetail(id)

    return (
        <div className='p-7 m-5 bg-gray-100 dark:bg-gray-900 min-h-screen gap-7 relative'>
            <Image style={{objectFit: 'cover'}} src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path || movie?.poster_path}`} alt="" fill/>
            <div className='absolute'>
                <div className='text-6xl font-bold text-gray-300 my-3'>
                    {movieDetail?.title}
                </div>
                <div className='text-gray-400 text-xl w-2/3'>
                    {movieDetail?.overview}
                </div>
                <div className='text-gray-400 my-3'>
                    {movieDetail?.vote_average} - {movieDetail?.release_date}
                </div>
                <div className='my-3 border w-32 p-2 rounded-md text-center text-lg font-medium-bold cursor-pointer text-amber-600 hover:bg-amber-500 hover:text-gray-900'>
                    Trailer
                </div>
            </div>

        </div>
    )
}
export default Page
