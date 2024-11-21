const express = require ('express')
const posts = require ('../data/posts.js')
const router = express.Router()
const postController = require ('../controllers/postControllers.js')

//rotta index
router.get('/', postController.index)

//rotta show: dinamica
router.get('/:id', postController.show)

//rotta store
router.post('/', postController.store)

//rotta update: dinamica
router.put('/:id', postController.update)

//rotta modify: dinamica
router.patch('/:id', postController.modify)

//rotta destroy: dinamica
router.delete('/:id', postController.destroy)




module.exports = router