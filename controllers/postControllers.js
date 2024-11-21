const posts = require('../data/posts.js')
let lastIndex = posts.at(-1).id


function index(req, res) {
    //res.send('questi sono i post')

    let filteredPosts = posts

    if (req.query.tag) {

        console.log(`stai prendendo la ricetta con il seguente tag: ${req.query.tag}`)

        filteredPosts = posts.filter((post) => {
            return post.tags.includes(req.query.tag.toLowerCase())
        })
    }
    console.log(filteredPosts)

    const count = filteredPosts.length

    res.json({ count , filteredPosts})
}


function show(req, res) {
    const id = parseInt(req.params.id)
    //res.send(`questo è il post con id: ${id}`)
    const post = posts.find((post) => post.id === id)
    console.log(post)

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


function store(req, res) {
    //res.send('stai creando un nuovo post')
    console.log(req.body)
    const { title, slug, content, image, tags } = req.body

    lastIndex++

    const newPost = {
        id: lastIndex,
        title: title,
        slug: slug,
        content: content,
        image: image,
        tags: tags,
    }

    console.log(newPost)

    posts.push(newPost)
    res.status(201).send(newPost)

}


function update(req, res) {
    const id = parseInt(req.params.id)
    //res.send(`stai aggiornando il post con id: ${id}`)

    const post = posts.find((post) => post.id === id)
    console.log(post)

    const { title, slug, content, image, tags } = req.body
    console.log(req.body)

    post.title = title;
    post.slug = slug;
    post.content = content;
    post.image = image;
    post.tags = tags

    res.json(post)
}


function modify(req, res) {
    const id = parseInt(req.params.id)
    //res.send(`stai modificando il post con id: ${id}`)

    const post = posts.find((post) => post.id === id)
    console.log(post)

    const { title, slug, content, image, tags } = req.body
    console.log(req.body)


    if (title) post.title = title;
    if (slug) post.slug = slug;
    if (content) post.content = content;
    if (image) post.image = image;
    if (tags) post.tags = tags

    res.json(post)
}


function destroy(req, res) {
    const id = parseInt(req.params.id)
    //res.send(`stai eliminando il post con id: ${id}`)

    const postIndex = posts.findIndex((post) => post.id === id)

    if (postIndex === -1) {
		res.status(404)

		return res.json({
			error: 'Post not found',
			message: 'Il post non è stato trovato',
		})
	}

    posts.splice(postIndex, 1)

    res.sendStatus(204)
}




module.exports = { index, show, store, update, modify, destroy }