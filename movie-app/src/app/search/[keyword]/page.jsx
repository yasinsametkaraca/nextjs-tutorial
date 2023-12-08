import React from 'react'
import Movies from "@/components/Movies";

const getSearch = async (keyword) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.API_KEY
        }
    }

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&query=${keyword}`, options)
    return await res.json()
}

const Page = async ({params}) => { //params is keyword
    const {keyword} = params
    const searchResult = await getSearch(keyword)

    console.log(searchResult)
    return (
        <div>
            <div className='p-5 m-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
                <div className='text-2xl font-bold text-gray-700 dark:text-gray-400'>
                    Search Result for "{keyword}"
                </div>
            </div>
            {
                searchResult?.results?.length === 0 ? (
                    <div className='text-2xl font-bold text-gray-400 text-center mt-10'>
                        No Movie Found
                    </div>
                ) : (
                    <div className="flex items-center flex-wrap gap-7 justify-center">
                        {
                            searchResult?.results?.map((movie, index) => (
                                <Movies key={index} movie={movie} />
                            ))
                        }
                    </div>
                )
            }
        </div>

    )
}
export default Page
