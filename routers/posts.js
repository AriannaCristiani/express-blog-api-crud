const express = require ('express')
const posts = require ('../posts-array')
const router = express.Router()

//rotta index
router.get('/', (req , res) =>{
    //res.send('questi sono i post')
    res.json (posts)
})

//rotta show: dinamica
router.get('/:id', (req, res) => {
    const id = req.params.id
    //res.send(`questo è il post con id: ${id}`)
    res.json (posts[`${id}`])
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