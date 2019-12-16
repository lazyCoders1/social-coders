require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env

// Controllers
const postCtrl = require('./controllers/postController')
const commentCtrl = require('./controllers/commentController')

// Middleware
const auth = require('./middleware/authMiddleware')

const app = express()

app.use(express.json())
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SECRET,
    cookie: { secure: false }
  }))

// Post Endpoints
app.get('/api/posts', postCtrl.getAllPosts)
app.get('/api/posts/:id', postCtrl.getOnePost)
app.post('/api/posts', auth.usersOnly, postCtrl.addPost)
app.delete('/api/posts/:id', postCtrl.deletePost)
app.patch('/api/posts/:id', postCtrl.updatePost)

// Comment Endpoints
app.get('/api/comments/:id', commentCtrl.getComments)
app.post('/api/comments', auth.usersOnly, commentCtrl.addComment)
app.delete('/api/comments/:id', commentCtrl.deleteComment)

massive(CONNECTION_STRING).then(database => {
  app.set('db', database)
  app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})