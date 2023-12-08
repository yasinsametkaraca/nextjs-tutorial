import React from 'react'

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
}
const Page = async ({params}) => {  //http://localhost:3000/1
    console.log(params.id)

    const data = await fetchPosts();
    console.log(data)


    return (
        <div>Page</div>
    )
}
export default Page

export async function generateStaticParams() {
    const posts = await fetchPosts()
    return posts.map(post => ({id : post.id.toString()})) // [{id: '1'}, {id: '2'}] şeklinde döndürür. Bu şekilde döndürülen değerler params olarak Page componentine gönderilir. Bu sayede statik olarak sayfalar kaydedilir (build edilince) ve her seferinde fetch işlemi yapılmaz.
}
