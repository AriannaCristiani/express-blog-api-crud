const express = require ('express')
const posts = require ('../data/posts')
const router = express.Router()

//rotta index
router.get('/', (req , res) =>{
    //res.send('questi sono i post')

    let filteredPosts = posts

    if(req.query.tag){
        //console.log(`stai prendendo la ricatta con il seguente tag: ${rew.query.tag}`)
        filteredPosts = posts.filter ((post) => {
            return post.tag.includes (req.query.tag)
        })
    }

    res.json (filteredPosts)
})

//rotta show: dinamica
router.get('/:id', (req, res) => {
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
})

//rotta store
router.post('/', (req, res) => {
    res.send('stai creando un nuovo post')
})

//rotta update: dinamica
router.put('/:id', (req, res) => {
    const id = req.params.id
    res.send(`stai aggiornando il post con id: ${id}`)
})

//rotta modify: dinamica
router.patch('/:id', (req, res) => {
    const id = req.params.id
    res.send(`stai modificando il post con id: ${id}`)
})

//rotta destroy: dinamica
router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send(`stai eliminando il post con id: ${id}`)
})





module.exports = router