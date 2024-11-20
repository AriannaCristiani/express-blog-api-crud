const express = require ('express')
const posts = require ('../data/posts')
const router = express.Router()
const postController = require ('../controllers/postControlles')

//rotta index
router.get('/', postController.index)

//rotta show: dinamica
router.get('/:id', postController.show)

//rotta store
router.post('/', postController.store)

//rotta update: dinamica
router.put('/:id', postController.update)

//rotta modify: dinamica
router.patch('/:id', postController.patch)

//rotta destroy: dinamica
router.delete('/:id', postController.destroy)




module.exports = router