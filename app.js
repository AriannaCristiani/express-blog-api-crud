const express = require('express')
const app = express()
const postsRouter = require ('./routers/posts.js')
const port = 3000
const posts = require('./data/posts.js')


app.use(express.static('public'))

//rotta principale
app.get('/', (req, res) => {
    res.send('hello')
})

//registrazione del router
app.use('/posts', postsRouter)


app.listen(port, () => {
    console.log(`il server è in ascolto sulla porta: ${port}`)
})
