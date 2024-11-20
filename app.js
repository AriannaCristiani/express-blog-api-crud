const express = require('express')
const postsRouter = require ('./routers/posts.js')
const app = express()
const port = 3000


app.use(express.static('public'))

//rotta principale
app.get('/', (req, res) => {
    //res.send('hello')
})

//registrazione del router
app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`il server è in ascolto sulla porta: ${port}`)
})
