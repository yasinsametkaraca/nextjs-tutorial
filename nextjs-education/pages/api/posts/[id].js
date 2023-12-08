import Posts from '../../../../data.json';

export default function handler(req, res) {
    const {method,cookies,query} = req;
    const {id} = query;
    console.log(id)

    const post = Posts.posts.find(post => post.id == id);
    if (!post) {
        res.status(404).json({message: `Post with id: ${id} not found`});
        return;
    }
    console.log(post)
    res.status(200).json(post);

}