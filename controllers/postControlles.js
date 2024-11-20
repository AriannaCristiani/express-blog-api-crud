const posts = require ('../data/posts')


function index (req , res) {
    //res.send('questi sono i post')

    let filteredPosts = posts

    if(req.query.tag){
        //console.log(`stai prendendo la ricatta con il seguente tag: ${rew.query.tag}`)
        filteredPosts = posts.filter ((post) => {
            return post.tag.includes (req.query.tag)
        })
    }

    res.json (filteredPosts)
}



function show (req, res) {
    const id = parseInt(req.params.id)
    //res.send(`questo è il post con id: ${id}`)
    const post = posts.find ((post) => post.id === id)

    if (!post) {
        res.status(404)
        res.json({
            error: 'post not found',
            message: 'il post non è stato trovato'
        })
        return
    }

    res.json(posts)
}


function store (req, res) {
    res.send('stai creando un nuovo post')
}


function update (req, res) {
    const id = parseInt(req.params.id)
    res.send(`stai aggiornando il post con id: ${id}`)
}


function patch (req, res) {
    const id = parseInt(req.params.id)
    res.send(`stai modificando il post con id: ${id}`)
}


function destroy (req, res) {
    const id = parseInt(req.params.id)
    //res.send(`stai eliminando il post con id: ${id}`)

    const postIndex = posts.findIndex((post)=> post.id === id)

    posts.splice(postIndex, 1)

    res.sendStatus(204)
}




module.exports = { index , show , store , update , patch , destroy}