const posts = require ('../data/posts.js')
let lastIndex = posts.at(-1).id


function index (req , res) {
    //res.send('questi sono i post')

    let filteredPosts = posts

    if(req.query.tag){
        
        console.log(`stai prendendo la ricetta con il seguente tag: ${req.query.tag}`)
        
		filteredPosts = posts.filter((post) => {
			return post.tags.includes(req.query.tag.toLowerCase())
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

    res.json(post)
}


function store (req, res) {
    //res.send('stai creando un nuovo post')
    //console.log(req.body)
    const { title , slug , content , image , tags} = req.body

    lastIndex ++

    const newPost = {
        id: lastIndex,
        title: title,
        slug: slug,
        content: content,
        image: image,
        tags: tags,
    }

    posts.push(newPost)
    res.status(201).send(newPost)

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