const express = require('express')
const postsRouter = require('./routers/posts.js')
const app = express()
const port = 3000

//visualizzazione immagini
app.use(express.static('public'));

//body parser
app.use(express.json());

//rotta principale
app.get('/', (req, res) => {
    //res.send('hello')
});

//registrazione del router
app.use('/posts', postsRouter);

//verifica sulla porta
app.listen(port, () => {
    console.log(`il server è in ascolto sulla porta: ${port}`)
});
