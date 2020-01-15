const express = require('express')
const app = express()
const SERVER_PORT = 4321
const c = require('./controllers/controller')

app.use(express.json())

app.get('/api/posts', c.getPosts)
app.post('/api/post', c.addPost)
app.put('/api/post/:id', c.editPost)

app.listen(SERVER_PORT, ()=> console.log(`Listening on ${SERVER_PORT}`))