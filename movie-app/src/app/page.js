import Movies from "@/components/Movies";
import Tabs from "@/components/Tabs";


const Home = async ({searchParams}) => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.API_KEY
        }
    }

    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?language=en-US&page=1`, options)
    const data = await res.json()
    console.log(data)


    return (
    <main>
        <Tabs></Tabs>
        <div className="flex items-center flex-wrap gap-7 justify-center">
            {
                data?.results?.map((movie, index) => (
                    <Movies key={index} movie={movie} />
                ))
            }
        </div>
    </main>
    )
}

export default Home