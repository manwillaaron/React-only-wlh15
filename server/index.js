require('dotenv').config()
const express = require('express')
const app = express()
const SERVER_PORT = 4321
const c = require('./controllers/controller')
const ac = require('./controllers/authController')
const {CONNECTION_STRING} = process.env
const session = require('express-session')
const massive  = require('massive')

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is all good')
    app.listen(SERVER_PORT, ()=> console.log(`Listening on ${SERVER_PORT}`))
})

app.use(session({
    resave: false,
    saveUninitialized:false,
    secret: 'asudhfklaushdflkauhsdflkuh',
    cookie :{
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.use(express.json())

app.get('/api/posts', c.getPosts)
// app.get('/api/user/posts', c.getPostsbyUserId)
app.post('/api/post', c.addPost)
app.put('/api/post/:id', c.editPost)
app.delete('/api/post/:id', c.deletePost)

app.post('/auth/user', ac.register)
app.post('/auth/login', ac.login)
app.get('/auth/check', ac.sessionCheck)
